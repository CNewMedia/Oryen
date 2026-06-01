import { buildFaqPageJsonLd } from '@/lib/aeo/faq-json-ld';
import { getLocalizedPathname } from '@/i18n/routing';
import type { FileInsightArticle } from '@/lib/insights/articles';
import { getSiteUrl } from '@/lib/site-url';
import { siteImages } from '@/lib/site-images';

type Props = {
  article: FileInsightArticle;
  locale: string;
};

function buildArticleJsonLd(article: FileInsightArticle, locale: string) {
  const base = getSiteUrl().replace(/\/$/, '');
  const insightsPath = getLocalizedPathname(locale, '/insights');
  const pageUrl = `${base}/${locale}${insightsPath}/${article.slug}`;
  const authorPath = getLocalizedPathname(locale, '/team');

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: {
      '@type': 'Person',
      name: article.author,
      url: `${base}/${locale}${authorPath}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ORYEN',
      url: base,
      logo: {
        '@type': 'ImageObject',
        url: `${base}${siteImages.hero}`,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    inLanguage: locale === 'en' ? 'en' : 'nl',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };
}

/** Server-rendered Article + FAQPage JSON-LD in initial HTML. */
export function ArticleJsonLd({ article, locale }: Props) {
  const articleSchema = buildArticleJsonLd(article, locale);
  const faqSchema = buildFaqPageJsonLd(article.faq.items);

  return (
    <>
      <script
        id={`article-json-ld-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id={`article-faq-json-ld-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
