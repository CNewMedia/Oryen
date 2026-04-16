import { Link } from '@/i18n/navigation';

import { SanityRichText } from '@/components/sanity/sanity-rich-text';

import type { InsightArticleDetail } from '@/types/insight';

type Props = { article: InsightArticleDetail };

export function InsightArticleDetailView({ article }: Props) {
  return (
    <>
      {article.heroImageUrl ? (
        <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden bg-[var(--line)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.heroImageUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <p className="mb-4 text-xs uppercase tracking-[0.12em] text-[var(--ink3)]">
        {article.publishedAt
          ? new Date(article.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : ''}
        {article.readingMinutes != null ? ` · ${article.readingMinutes} min` : ''}
        {article.authorName ? ` · ${article.authorName}` : ''}
      </p>
      {article.excerpt ? (
        <p className="stelling-p mb-10 text-[var(--ink)]">{article.excerpt}</p>
      ) : null}
      {article.tags && article.tags.length > 0 ? (
        <div className="mb-10 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <Link
              key={t}
              className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink3)] hover:border-[var(--ink3)]"
              href={`/insights/tag/${encodeURIComponent(t)}` as never}
            >
              {t}
            </Link>
          ))}
        </div>
      ) : null}
      <SanityRichText value={article.body} />
    </>
  );
}
