import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('about.title')} | ORYEN`,
    description: t('about.intro'),
  };
}

export default async function AboutPage({ params }: Props) {
  await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        intro={t('about.intro')}
      />
  );
}
