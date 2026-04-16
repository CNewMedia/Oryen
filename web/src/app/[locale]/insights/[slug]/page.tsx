import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InsightArticleDetailView } from '@/components/insights/insight-article-detail';
import { InnerPage } from '@/components/ui/inner-page';
import { requireInsightArticleBySlug } from '@/lib/sanity/load-insights';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await requireInsightArticleBySlug(locale, slug);
  const { seo } = article;
  return {
    title: seo.title,
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'article',
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
