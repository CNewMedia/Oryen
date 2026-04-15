import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('cookies.title')} | ORYEN`,
    robots: { index: true, follow: true },
  };
}

export default async function CookiesPage({ params }: Props) {
  await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage eyebrow={t('cookies.eyebrow')} title={t('cookies.title')}>
        <p className="stelling-p max-w-prose">
          Placeholder — vervang door definitieve cookie-tekst (Sanity legal).
        </p>
      </InnerPage>
  );
}
