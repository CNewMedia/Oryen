import type { Metadata } from 'next';

import { AanbodPageView } from '@/components/aanbod/aanbod-page-view';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { loadAanbod } from '@/lib/sanity/load-aanbod';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [content, settings] = await Promise.all([
    loadAanbod(locale),
    getCachedSiteSettings(locale),
  ]);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
    },
  };
}

export default async function AanbodPage({ params }: Props) {
  const { locale } = await params;
  const content = await loadAanbod(locale);

  return <AanbodPageView content={content} />;
}
