import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('cases.title')} | ORYEN`,
    description: t('cases.intro'),
  };
}

export default async function CasesPage({ params }: Props) {
  await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage
        eyebrow={t('cases.eyebrow')}
        title={t('cases.title')}
        intro={t('cases.intro')}
      />
  );
}
