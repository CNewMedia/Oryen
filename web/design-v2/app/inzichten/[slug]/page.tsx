import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CTAButton } from '@/components/cta-button'
import { articles, getArticle } from '@/lib/articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Inzichten — ORYEN' }
  return {
    title: `${article.title} | ORYEN`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Inzichten"
        title={article.title}
        intro={
          <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] text-pine-foreground/60">
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.author}</span>
          </div>
        }
      />

      <article className="bg-offwhite">
        <div className="mx-auto max-w-[760px] px-6 py-24 md:py-32">
          <div className="flex flex-col gap-6">
            {article.blocks.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <Reveal key={i}>
                    <h2 className="mt-6 font-display text-[clamp(1.6rem,3vw,2rem)] font-medium leading-snug text-ink text-balance">
                      {block.text}
                    </h2>
                  </Reveal>
                )
              }
              if (block.type === 'subheading') {
                return (
                  <Reveal key={i}>
                    <h3 className="mt-4 font-display text-[20px] font-medium text-ink">
                      {block.text}
                    </h3>
                  </Reveal>
                )
              }
              if (block.type === 'table') {
                return (
                  <Reveal key={i}>
                    <div className="my-4 overflow-x-auto rounded-[var(--radius)] border border-hairline">
                      <table className="w-full border-collapse text-left text-[15px]">
                        <thead>
                          <tr className="bg-secondary">
                            {block.headers.map((h, hi) => (
                              <th
                                key={hi}
                                className="border-b border-hairline px-4 py-3 font-medium text-ink"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, ri) => (
                            <tr key={ri} className="align-top">
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`border-b border-hairline px-4 py-3 leading-relaxed ${
                                    ci === 0
                                      ? 'font-medium text-ink'
                                      : 'text-ink/75'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Reveal>
                )
              }
              return (
                <Reveal key={i}>
                  <p className="text-[17px] leading-relaxed text-ink/80">
                    {block.text}
                  </p>
                </Reveal>
              )
            })}
          </div>

          {/* Inline CTA */}
          <Reveal>
            <div className="mt-12 border-t border-hairline pt-10">
              <CTAButton href="/contact" variant="ghost-dark">
                Plan een Reality Check-gesprek met Christophe
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </article>

      {/* FAQ */}
      {article.faqs.length > 0 && (
        <section className="bg-pine text-pine-foreground">
          <div className="mx-auto max-w-[820px] px-6 py-24 md:py-28">
            <Reveal>
              <span className="text-[13px] uppercase tracking-[0.22em] text-amber">
                Veelgestelde vragen
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.25rem)] font-medium text-pine-foreground">
                Veelgestelde vragen
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-pine-hairline border-t border-pine-hairline">
              {article.faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 60} as="div">
                  <details className="group/faq py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-medium text-pine-foreground">
                      {faq.q}
                      <span
                        aria-hidden="true"
                        className="text-amber transition-transform duration-300 group-open/faq:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-pine-foreground/70">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-14">
                <Link
                  href="/inzichten"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-pine-foreground transition-colors hover:text-amber"
                >
                  <span aria-hidden="true">←</span>
                  Terug naar alle inzichten
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  )
}
