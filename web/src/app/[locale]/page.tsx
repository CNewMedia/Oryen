import type { Metadata } from 'next';

import { HomePageView } from '@/components/home/home-page-view';
import { HomeHeroEffects } from '@/components/premium/premium-page-effects';
import { getCachedHomepage, getCachedSiteSettings } from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { seo } = await getCachedHomepage(locale);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const [homeData, settings] = await Promise.all([
    getCachedHomepage(locale),
    getCachedSiteSettings(locale),
  ]);
  const contactEmail = settings.contactEmail ?? 'hello@oryen.be';

  return (
    <>
      <HomeHeroEffects />
      <HomePageView
        home={homeData.content}
        images={homeData.imageUrls}
        contactEmail={contactEmail}
      />
    </>
  );
}
