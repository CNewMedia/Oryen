import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  company: z.string().max(200).optional(),
  phone: z.string().max(60).optional(),
  message: z.string().min(1).max(8000),
  locale: z.enum(['nl', 'en']),
});

/**
 * Contact submissions — swap body for HubSpot / CRM later.
 */
export async function POST(req: Request) {
  const formData = await req.formData();
  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    company: String(formData.get('company') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    message: String(formData.get('message') ?? ''),
    locale: formData.get('locale') === 'en' ? 'en' : 'nl',
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // eslint-disable-next-line no-console -- server log until CRM wiring
  console.info('[contact]', parsed.data.email, parsed.data.locale);

  const path = parsed.data.locale === 'en' ? '/en/thank-you' : '/nl/bedankt';
  return NextResponse.redirect(new URL(path, req.url), 303);
}
