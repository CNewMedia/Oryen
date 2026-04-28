import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { HomePageView } from '@/components/home/home-page-view';
import { HomeHeroEffects } from '@/components/premium/premium-page-effects';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedHomepage, getCachedSiteSettings } from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { seo, imageUrls } = await getCachedHomepage(locale);
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
  const [homeData, settings, tNav] = await Promise.all([
    getCachedHomepage(locale),
    getCachedSiteSettings(locale),
    getTranslations({ locale, namespace: 'Nav' }),
  ]);
  const contactEmail = settings.contactEmail ?? 'hello@oryen.be';

  return (
    <>
      <HomeHeroEffects />
      <HomePageView
        home={homeData.content}
        images={homeData.imageUrls}
        contactEmail={contactEmail}
        seeAllCasesLabel={tNav('seeAllCases')}
        meetTheTeamLabel={tNav('meetTheTeam')}
      />
    </>
  );
}
