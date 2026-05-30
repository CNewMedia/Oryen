import { Link } from '@/i18n/navigation';
import { InlineLinkedText } from '@/lib/richtext/inline-linked-text';
import type { FileInsightArticle, InsightArticleSection } from '@/lib/insights/articles';

type Props = {
  article: FileInsightArticle;
};

function renderParagraph(text: string, key: string) {
  return (
    <p key={key} className="stelling-p insight-article-p">
      <InlineLinkedText text={text} linkClassName="insight-inline-link" />
    </p>
  );
}

function renderSection(section: InsightArticleSection) {
  if (section.kind === 'table') {
    return (
      <section key={section.heading} className="insight-article-block">
        <h2 className="insight-article-h2">{section.heading}</h2>
        <div className="insight-article-table-wrap">
          <table className="insight-article-table">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Marketingbureau</th>
                <th scope="col">Strategische doorlichting</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.bureau}</td>
                  <td>{row.doorlichting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (section.kind === 'h2') {
    return (
      <section key={section.heading} className="insight-article-block">
        <h2 className="insight-article-h2">{section.heading}</h2>
        {section.paragraphs.map((p) => renderParagraph(p, p.slice(0, 40)))}
      </section>
    );
  }

  return (
    <section key={section.heading} className="insight-article-block">
      <h3 className="insight-article-h3">{section.heading}</h3>
      {section.paragraphs.map((p) => renderParagraph(p, p.slice(0, 40)))}
    </section>
  );
}

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
        {article.sections.map((section) => renderSection(section))}
      </div>

      <p className="insight-article-cta-wrap">
        <Link className="insight-article-cta" href={article.cta.href}>
          {article.cta.label}
        </Link>
      </p>
    </article>
  );
}
