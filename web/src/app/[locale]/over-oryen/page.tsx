import { redirect } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

/**
 * Deprecated route — `/over-oryen` (NL) / `/about` (EN) no longer has a
 * distinct role in the IA. The "people / trust" page is `/team`; positioning
 * and creds live on the homepage. Permanent redirect so bookmarks, inbound
 * links and legacy navigation entries resolve to the canonical page.
 */
export default async function OverOnsRedirect({ params }: Props) {
  const { locale } = await params;
  if (locale === 'en') {
    redirect('/en/team');
  }
  redirect('/nl/team');
}
