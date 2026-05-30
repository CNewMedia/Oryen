import { Link } from '@/i18n/navigation';
import type { FileInsightArticle } from '@/lib/insights/articles';

type Props = {
  article: FileInsightArticle;
};

export function ArticleView({ article }: Props) {
  const publishedLabel = new Date(article.publishedDate).toLocaleDateString(
    'nl-BE',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article className="insight-article">
      <header className="insight-article-header">
        <h1 className="stelling-hl insight-article-title">{article.title}</h1>
        <p className="insight-article-meta">
          <time dateTime={article.publishedDate}>{publishedLabel}</time>
          <span aria-hidden="true"> · </span>
          <span>{article.author}</span>
        </p>
        <p className="insight-article-lead stelling-p">{article.lead}</p>
      </header>

      <div className="insight-article-body">
        {article.sections.map((section) => {
          if (section.kind === 'h2') {
            return (
              <section key={section.heading} className="insight-article-block">
                <h2 className="insight-article-h2">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="stelling-p insight-article-p">
                    {p}
                  </p>
                ))}
              </section>
            );
          }
          return (
            <section key={section.heading} className="insight-article-block">
              <h3 className="insight-article-h3">{section.heading}</h3>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="stelling-p insight-article-p">
                  {p}
                </p>
              ))}
            </section>
          );
        })}
      </div>

      <p className="insight-article-cta-wrap">
        <Link className="insight-article-cta" href={article.cta.href}>
          {article.cta.label}
        </Link>
      </p>
    </article>
  );
}
