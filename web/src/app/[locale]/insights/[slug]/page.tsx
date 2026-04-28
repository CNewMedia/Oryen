import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InsightArticleDetailView } from '@/components/insights/insight-article-detail';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesInsightDetail,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { requireInsightArticleBySlug } from '@/lib/sanity/load-insights';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const [article, settings] = await Promise.all([
    requireInsightArticleBySlug(locale, slug),
    getCachedSiteSettings(locale),
  ]);
  const { seo } = article;
  const images = ogImagesForPage(article.heroImageUrl);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesInsightDetail(locale, slug),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'article',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const [article, t] = await Promise.all([
    requireInsightArticleBySlug(locale, slug),
    getTranslations({ locale, namespace: 'Insights' }),
  ]);

  return (
    <InnerPage eyebrow={t('detailEyebrow')} title={article.title}>
      <InsightArticleDetailView article={article} />
    </InnerPage>
  );
}
