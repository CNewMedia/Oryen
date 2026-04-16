import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { InsightArticleList } from '@/components/insights/insight-article-list';
import { InnerPage } from '@/components/ui/inner-page';
import { loadInsightArticleListByTag } from '@/lib/sanity/load-insights';

type Props = { params: Promise<{ locale: string; tag: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tag: rawTag } = await params;
  const tag = decodeURIComponent(rawTag);
  const t = await getTranslations({ locale, namespace: 'Insights' });
  return {
    title: `${tag} — ${t('tagTitle')} | ORYEN`,
    description: t('tagIntro'),
  };
}

export default async function InsightsTagPage({ params }: Props) {
  const { locale, tag: rawTag } = await params;
  const tag = decodeURIComponent(rawTag);
  const [articles, t] = await Promise.all([
    loadInsightArticleListByTag(locale, tag),
    getTranslations({ locale, namespace: 'Insights' }),
  ]);

  return (
    <InnerPage
      eyebrow={t('tagTitle')}
      title={tag}
      intro={t('tagIntro')}
    >
      <InsightArticleList articles={articles} emptyLabel={t('empty')} />
    </InnerPage>
  );
}
