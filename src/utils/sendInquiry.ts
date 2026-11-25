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

/**
 * Sends form submissions directly to the recipient email via FormSubmit AJAX endpoint.
 * Note: FormSubmit sends a one-time activation link to the recipient on the very first submission.
 */
export async function sendInquiryEmail(payload: InquiryPayload): Promise<InquiryResult> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(payload.recipientEmail)}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      project_type: payload.projectType || 'General Inquiry',
      message: payload.message,
      _subject: `New Portfolio Inquiry from ${payload.name} (${payload.projectType || 'Project'})`,
      _replyto: payload.email,
      _template: 'table',
    }),
  });

  const data = (await response.json().catch(() => ({}))) as { success?: string | boolean; message?: string };

  if (!response.ok || data.success === 'false' || data.success === false) {
    throw new Error(data.message || 'Could not deliver message right now.');
  }

  return {
    ok: true,
    message: data.message || 'Message delivered straight to Sid’s inbox!',
  };
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
