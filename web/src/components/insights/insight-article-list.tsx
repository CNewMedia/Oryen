import { Link } from '@/i18n/navigation';

import type { InsightListItem } from '@/types/insight';

type Props = {
  articles: InsightListItem[];
  emptyLabel: string;
};

export function InsightArticleList({ articles, emptyLabel }: Props) {
  if (articles.length === 0) {
    return <p className="stelling-p text-[var(--ink2)]">{emptyLabel}</p>;
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {articles.map((a) => (
        <li key={a._id}>
          <article className="group flex h-full flex-col border border-[var(--line)] bg-[var(--cream)]/60 p-6 transition hover:border-[var(--ink3)]">
            {a.heroImageUrl ? (
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden bg-[var(--line)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.heroImageUrl}
                  alt=""
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
            ) : null}
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[var(--ink3)]">
              {a.publishedAt
                ? new Date(a.publishedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
                : '—'}
              {a.readingMinutes != null ? ` · ${a.readingMinutes} min` : ''}
            </p>
            <h2 className="stelling-hl mb-3 text-xl !leading-snug">
              <Link
                className="hover:text-[var(--ink2)]"
                href={`/insights/${a.slug}` as never}
              >
                {a.title}
              </Link>
            </h2>
            {a.excerpt ? (
              <p className="stelling-p mb-4 flex-1 text-[var(--ink2)]">
                {a.excerpt}
              </p>
            ) : null}
            {a.tags && a.tags.length > 0 ? (
              <div className="mt-auto flex flex-wrap gap-2">
                {a.tags.map((t) => (
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
          </article>
        </li>
      ))}
    </ul>
  );
}
