import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('aanpak.title')} | ORYEN`,
    description: t('aanpak.intro'),
  };
}

export default async function AanpakPage({ params }: Props) {
  await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage
        eyebrow={t('aanpak.eyebrow')}
        title={t('aanpak.title')}
        intro={t('aanpak.intro')}
      />
  );
}
