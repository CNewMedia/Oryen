import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SanityRichText } from '@/components/sanity/sanity-rich-text';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import {
  getCachedLegalPage,
  getCachedSiteSettings,
} from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [{ seo }, settings] = await Promise.all([
    getCachedLegalPage(locale, 'cookies'),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/cookies'),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  const page = await getCachedLegalPage(locale, 'cookies');
  const t = await getTranslations({ locale, namespace: 'Pages' });

  return (
    <InnerPage eyebrow={page.eyebrow} title={page.title}>
      {page.body && page.body.length > 0 ? (
        <SanityRichText value={page.body} />
      ) : (
        <p className="stelling-p max-w-prose text-[var(--ink2)]">
          {t('cookies.intro')}
        </p>
      )}
    </InnerPage>
  );
}
