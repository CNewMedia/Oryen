import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { FaqSection } from '@/components/faq/faq-section';
import { ArticleJsonLd } from '@/components/insights/article-json-ld';
import { ArticleView } from '@/components/insights/article-view';
import { InsightArticleDetailView } from '@/components/insights/insight-article-detail';
import { InnerPage } from '@/components/ui/inner-page';
import {
  alternatesInsightDetail,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import { getFileInsightArticleBySlug } from '@/lib/insights/articles';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import {
  loadInsightArticleBySlug,
  requireInsightArticleBySlug,
} from '@/lib/sanity/load-insights';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const fileArticle = getFileInsightArticleBySlug(locale, slug);

  if (fileArticle) {
    const settings = await getCachedSiteSettings(locale);
    const alternates = alternatesInsightDetail(locale, slug);
    const canonical =
      alternates &&
      typeof alternates.canonical === 'string'
        ? alternates.canonical
        : undefined;
    const images = ogImagesForPage(undefined);

    return {
      title: documentTitleAbsolute(fileArticle.metaTitle),
      description: fileArticle.metaDescription,
      alternates,
      openGraph: {
        title: fileArticle.metaTitle,
        description: fileArticle.metaDescription,
        locale,
        type: 'article',
        url: canonical,
        siteName: settings.siteTitle,
        ...(images ? { images } : {}),
      },
    };
  }

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
  const fileArticle = getFileInsightArticleBySlug(locale, slug);

  if (fileArticle) {
    return (
      <>
        <ArticleJsonLd article={fileArticle} locale={locale} />
        <section className="has-spine spine-light min-h-[70vh] bg-[var(--cream)] pt-[100px] pb-24">
          <div className="spine-grid">
            <div className="spine-label spine-label-light">
              <span>INZICHTEN</span>
            </div>
            <div className="spine-content insight-article-page !pt-[clamp(4rem,8vh,6rem)]">
              <ArticleView article={fileArticle} />
            </div>
          </div>
        </section>
        <FaqSection
          faq={{
            eyebrow: fileArticle.faq.heading,
            items: fileArticle.faq.items,
          }}
        />
      </>
    );
  }

  const sanityArticle = await loadInsightArticleBySlug(locale, slug);
  if (!sanityArticle) notFound();

  const t = await getTranslations({ locale, namespace: 'Insights' });

  return (
    <InnerPage eyebrow={t('detailEyebrow')} title={sanityArticle.title}>
      <InsightArticleDetailView article={sanityArticle} />
    </InnerPage>
  );
}
