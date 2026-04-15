import { redirect } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

/** Oude URL; Reality Check leeft op /aanbod (NL) of /offer (EN). */
export default async function RealityCheckRedirect({ params }: Props) {
  const { locale } = await params;
  if (locale === 'en') {
    redirect('/en/offer');
  }
  redirect('/nl/aanbod');
}
