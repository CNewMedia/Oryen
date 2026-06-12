import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { HomePageView } from '@/components/home/v2/home-page-view';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedHomepageContent } from '@/lib/home/load-homepage-content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { seo, imageUrls } = await getCachedHomepageContent(locale);
  const images = ogImagesForPage(imageUrls.hero);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/'),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
      ...(images ? { images } : {}),
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const [homeData, tNav] = await Promise.all([
    getCachedHomepageContent(locale),
    getTranslations({ locale, namespace: 'Nav' }),
  ]);

  return (
    <HomePageView
      home={homeData.content}
      heroImage={homeData.imageUrls.hero}
      locale={locale}
      seeAllCasesLabel={tNav('seeAllCases')}
    />
  );
}
