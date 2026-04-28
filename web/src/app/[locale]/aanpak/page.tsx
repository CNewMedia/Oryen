import type { Metadata } from 'next';

import { AanpakPageView } from '@/components/aanpak/aanpak-page-view';
import { AanpakHeroEffects } from '@/components/premium/premium-page-effects';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedAanpak, getCachedSiteSettings } from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [content, settings] = await Promise.all([
    getCachedAanpak(locale),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(content.heroImageUrl);
  return {
    title: documentTitleAbsolute(content.meta.title),
    description: content.meta.description,
    alternates: alternatesForPath(locale, '/aanpak'),
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function AanpakPage({ params }: Props) {
  const { locale } = await params;
  const content = await getCachedAanpak(locale);
  return (
    <>
      <AanpakHeroEffects />
      <AanpakPageView content={content} locale={locale} />
    </>
  );
}
