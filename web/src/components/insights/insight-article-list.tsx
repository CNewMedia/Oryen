import { Link } from '@/i18n/navigation';

import type { InsightListItem } from '@/types/insight';

type Props = {
  articles: InsightListItem[];
  emptyLabel: string;
  locale: string;
  readMoreLabel: string;
};

function truncateExcerpt(text: string, max = 200): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max).trimEnd();
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut}...`;
}

function formatPublishedDate(publishedAt: string, locale: string): string {
  return new Date(publishedAt)
    .toLocaleDateString(locale === 'nl' ? 'nl-BE' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .toUpperCase();
}

export function InsightArticleList({
  articles,
  emptyLabel,
  locale,
  readMoreLabel,
}: Props) {
  if (articles.length === 0) {
    return <p className="stelling-p insights-list-empty">{emptyLabel}</p>;
  }

  return (
    <ul className="insights-list">
      {articles.map((a) => {
        const excerpt = a.excerpt ? truncateExcerpt(a.excerpt) : null;
        const href = {
          pathname: '/insights/[slug]',
          params: { slug: a.slug },
        } as const;

        return (
          <li key={a._id} className="insights-list-item">
            <article className="insights-list-card">
              {a.publishedAt || a.authorName ? (
                <p className="insights-list-meta">
                  {a.publishedAt ? (
                    <time dateTime={a.publishedAt}>
                      {formatPublishedDate(a.publishedAt, locale)}
                    </time>
                  ) : null}
                  {a.publishedAt && a.authorName ? (
                    <span className="insights-list-meta-sep" aria-hidden="true">
                      {' · '}
                    </span>
                  ) : null}
                  {a.authorName ? (
                    <span className="insights-list-meta-author">
                      {a.authorName.toUpperCase()}
                    </span>
                  ) : null}
                </p>
              ) : null}
              <h2 className="insights-list-title">
                <Link className="insights-list-title-link" href={href}>
                  {a.title}
                </Link>
              </h2>
              {excerpt ? (
                <p className="insights-list-excerpt stelling-p">{excerpt}</p>
              ) : null}
              <Link className="insights-list-more" href={href}>
                <span className="insights-list-more-text">{readMoreLabel}</span>
                <span className="insights-list-more-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
