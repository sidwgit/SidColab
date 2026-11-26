export interface InquiryPayload {
  name: string;
  email: string;
  projectType: string;
  message: string;
  recipientEmail: string;
}

export interface InquiryResult {
  ok: boolean;
  message: string;
}

const REQUEST_TIMEOUT_MS = 12_000;

async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit,
  timeoutMs = REQUEST_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function sendDirectFormSubmit(payload: InquiryPayload): Promise<InquiryResult> {
  // Use FormData (no Content-Type: application/json) to avoid slow CORS OPTIONS preflights.
  const endpoint = `https://formsubmit.co/ajax/${payload.recipientEmail}`;
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('email', payload.email);
  formData.append('project_type', payload.projectType || 'General Inquiry');
  formData.append('message', payload.message);
  formData.append(
    '_subject',
    `New Portfolio Inquiry from ${payload.name} (${payload.projectType || 'Project'})`
  );
  formData.append('_replyto', payload.email);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');

  const response = await fetchWithTimeout(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });

  const data = (await response.json().catch(() => ({}))) as {
    success?: string | boolean;
    message?: string;
  };
  const isSuccess = response.ok && (data.success === true || data.success === 'true');

  if (!isSuccess) {
    const rawMsg = data.message || '';
    if (rawMsg.toLowerCase().includes('activation')) {
      throw new Error(
        `Check ${payload.recipientEmail} (Inbox/Spam) and click FormSubmit's 'Activate Form' link once to enable direct delivery.`
      );
    }
    throw new Error(rawMsg || 'Could not deliver message right now.');
  }

  return {
    ok: true,
    message: data.message || 'Message delivered straight to Sid’s inbox!',
  };
}

/**
 * Uses /api/contact when a server mail key (Resend) is configured,
 * and otherwise submits directly from the browser via FormData POST to FormSubmit.
 */
export async function sendInquiryEmail(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const apiResponse = await fetchWithTimeout('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        projectType: payload.projectType || 'General Inquiry',
        message: payload.message,
      }),
    });

    if (apiResponse.status === 404 || apiResponse.status === 405 || apiResponse.status === 501) {
      return await sendDirectFormSubmit(payload);
    }

    const data = (await apiResponse.json().catch(() => ({}))) as {
      ok?: boolean;
      useClientDirect?: boolean;
      message?: string;
    };

    if (data.useClientDirect) {
      return await sendDirectFormSubmit(payload);
    }

    if (!apiResponse.ok || !data.ok) {
      throw new Error(data.message || 'Could not deliver message right now.');
    }

    return {
      ok: true,
      message: data.message || 'Message delivered straight to Sid’s inbox!',
    };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again or use the Mail App button.');
    }
    throw error;
  }
}

export function buildMailtoUrl(payload: InquiryPayload): string {
  const subject = encodeURIComponent(
    `Portfolio Inquiry: ${payload.projectType || 'Project'} — ${payload.name || 'Client'}`
  );
  const body = encodeURIComponent(
    `Hi Sid,\n\nName: ${payload.name}\nEmail: ${payload.email}\nProject Type: ${payload.projectType}\n\nMessage:\n${payload.message}`
  );
  return `mailto:${payload.recipientEmail}?subject=${subject}&body=${body}`;
}
