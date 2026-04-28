import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InsightArticleList } from '@/components/insights/insight-article-list';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import {
  getCachedInsightArticleList,
  getCachedInsightsOverview,
  getCachedSiteSettings,
} from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [{ seo }, settings] = await Promise.all([
    getCachedInsightsOverview(locale),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/insights'),
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

export default async function InsightsOverviewPage({ params }: Props) {
  const { locale } = await params;
  const [{ header }, articles, t] = await Promise.all([
    getCachedInsightsOverview(locale),
    getCachedInsightArticleList(locale),
    getTranslations({ locale, namespace: 'Insights' }),
  ]);

  return (
    <InnerPage eyebrow={header.eyebrow} title={header.title} intro={header.intro}>
      <InsightArticleList articles={articles} emptyLabel={t('empty')} />
    </InnerPage>
  );
}
