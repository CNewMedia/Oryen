import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { HomePageView } from '@/components/home/home-page-view';
import { HomeHeroEffects } from '@/components/premium/premium-page-effects';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('siteName'),
    description: t('defaultDescription'),
    openGraph: {
      title: t('siteName'),
      description: t('defaultDescription'),
      locale,
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HomeHeroEffects />
      <HomePageView />
    </>
  );
}
