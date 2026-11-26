import { metric } from '@vercel/functions';

const RECIPIENT_EMAIL = 'sidwcolab@gmail.com';
const REQUEST_TIMEOUT_MS = 10_000;

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
}

function asTrimmedString(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

async function sendViaResend(payload: {
  name: string;
  email: string;
  projectType: string;
  message: string;
  apiKey: string;
}): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch('https://api.resend.com/emails', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${payload.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'SidColab Portfolio <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL],
        reply_to: payload.email,
        subject: `New Portfolio Inquiry from ${payload.name} (${payload.projectType})`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Project Type: ${payload.projectType}`,
          '',
          'Message:',
          payload.message,
        ].join('\n'),
      }),
    });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request): Promise<Response> {
  const startedAt = performance.now();

  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      // FormSubmit blocks datacenter IPs (403); signal client to submit directly via browser FormData.
      metric('contact.inquiries', 1, { outcome: 'fallback_client', provider: 'formsubmit' });
      return Response.json(
        { ok: false, useClientDirect: true },
        { status: 501 }
      );
    }

    const body = (await request.json().catch(() => null)) as ContactRequestBody | null;
    if (!body) {
      metric('contact.inquiries', 1, { outcome: 'invalid', provider: 'resend' });
      return Response.json({ ok: false, message: 'Invalid JSON request body.' }, { status: 400 });
    }

    const name = asTrimmedString(body.name, 120);
    const email = asTrimmedString(body.email, 200);
    const projectType = asTrimmedString(body.projectType, 120) || 'General Inquiry';
    const message = asTrimmedString(body.message, 4000);

    if (!name || !email || !message) {
      metric('contact.inquiries', 1, { outcome: 'invalid', provider: 'resend' });
      return Response.json(
        { ok: false, message: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }

    const resendRes = await sendViaResend({ name, email, projectType, message, apiKey: resendKey });
    if (!resendRes.ok) {
      const errBody = await resendRes.text().catch(() => '');
      metric('contact.inquiries', 1, { outcome: 'error', provider: 'resend' });
      return Response.json(
        { ok: false, message: errBody || 'Email provider failed to send message.' },
        { status: 502 }
      );
    }

    metric('contact.inquiries', 1, { outcome: 'success', provider: 'resend' });
    return Response.json({ ok: true, message: 'Message delivered straight to Sid’s inbox!' });
  } catch (error) {
    const isTimeout = error instanceof Error && error.name === 'AbortError';
    metric('contact.inquiries', 1, {
      outcome: isTimeout ? 'timeout' : 'error',
      provider: 'resend',
    });
    return Response.json(
      {
        ok: false,
        message: isTimeout
          ? 'Request timed out. Please try again or use the Mail App button below.'
          : 'Could not send message right now. Please use the Mail App button below.',
      },
      { status: isTimeout ? 504 : 500 }
    );
  } finally {
    metric('contact.duration_ms', performance.now() - startedAt);
  }
}
