import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

import { getLocalizedPathname } from '@/i18n/routing';
import { contactFormRateLimitOk, clientIpFromRequest } from '@/lib/contact-rate-limit';

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().max(8000).optional(),
  locale: z.enum(['nl', 'en']),
});

const CONTACT_TO = (process.env.CONTACT_FORM_TO ?? 'info@oryen.be').trim();
const CONTACT_FROM = (process.env.CONTACT_FORM_FROM ?? 'noreply@oryen.be').trim();

function thankYouUrl(req: Request, locale: 'nl' | 'en', error?: 'send_failed' | 'rate_limited'): URL {
  const seg = getLocalizedPathname(locale, '/bedankt');
  const u = new URL(`/${locale}${seg}`, req.url);
  if (error) u.searchParams.set('error', error);
  return u;
}

function safeSubjectFragment(name: string): string {
  return name.replace(/[\r\n]+/g, ' ').trim().slice(0, 120);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildInternalEmail(data: z.infer<typeof schema>): { text: string; html: string } {
  const msg = data.message?.trim() || '(Geen bericht ingevuld)';
  const text = [
    'Nieuwe aanvraag via oryen.be',
    '',
    `Naam: ${data.name}`,
    `E-mail: ${data.email}`,
    `Taal formulier: ${data.locale.toUpperCase()}`,
    '',
    'Bericht:',
    msg,
  ].join('\n');
  const html = `<p><strong>Nieuwe aanvraag via oryen.be</strong></p>
<p><strong>Naam:</strong> ${escapeHtml(data.name)}<br/>
<strong>E-mail:</strong> ${escapeHtml(data.email)}<br/>
<strong>Taal:</strong> ${escapeHtml(data.locale)}</p>
<p><strong>Bericht:</strong></p>
<p>${escapeHtml(msg).replace(/\n/g, '<br/>')}</p>`;
  return { text, html };
}

function confirmationCopy(locale: 'nl' | 'en'): { subject: string; text: string; html: string } {
  if (locale === 'en') {
    const text =
      'Thank you for your message. Christophe reads everything and will reply personally within one business day when it makes sense content-wise. — ORYEN';
    return {
      subject: 'Thank you for contacting ORYEN',
      text,
      html: `<p>${escapeHtml(text).replace(/—/g, '&#8212;')}</p>`,
    };
  }
  const text =
    'Bedankt voor uw bericht. Christophe leest mee en antwoordt persoonlijk binnen één werkdag wanneer het inhoudelijk past. — ORYEN';
  return {
    subject: 'Bedankt voor uw bericht — ORYEN',
    text,
    html: `<p>${escapeHtml(text).replace(/—/g, '&#8212;')}</p>`,
  };
}

/**
 * Contact submissions → Resend (internal + optional confirmation). Honeypot + rate limit.
 */
export async function POST(req: Request) {
  const formData = await req.formData();

  /** Honeypot: must stay empty (bots often fill hidden fields). */
  const hp = String(formData.get('contact_company') ?? '').trim();
  if (hp !== '') {
    const localeRaw = formData.get('locale') === 'en' ? 'en' : 'nl';
    return NextResponse.redirect(thankYouUrl(req, localeRaw as 'nl' | 'en'), 303);
  }

  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
    locale: formData.get('locale') === 'en' ? 'en' : 'nl',
  } as const;

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { locale } = parsed.data;
  const ip = clientIpFromRequest(req);
  if (!contactFormRateLimitOk(ip)) {
    console.warn('[contact] rate limited', ip);
    return NextResponse.redirect(thankYouUrl(req, locale, 'rate_limited'), 303);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — cannot send mail');
    return NextResponse.redirect(thankYouUrl(req, locale, 'send_failed'), 303);
  }

  const resend = new Resend(apiKey);
  const internal = buildInternalEmail(parsed.data);
  const subject = `Nieuwe aanvraag via oryen.be — ${safeSubjectFragment(parsed.data.name)}`;

  const internalResult = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: parsed.data.email,
    subject,
    text: internal.text,
    html: internal.html,
  });

  if (internalResult.error) {
    console.error('[contact] Resend internal mail failed', internalResult.error);
    return NextResponse.redirect(thankYouUrl(req, locale, 'send_failed'), 303);
  }

  const confirm = confirmationCopy(locale);
  const confirmResult = await resend.emails.send({
    from: CONTACT_FROM,
    to: parsed.data.email,
    subject: confirm.subject,
    text: confirm.text,
    html: confirm.html,
  });

  if (confirmResult.error) {
    console.error('[contact] Resend confirmation mail failed (internal was sent)', confirmResult.error);
  }

  return NextResponse.redirect(thankYouUrl(req, locale), 303);
}
