import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Inzichten — ORYEN',
  description:
    'Artikels over commerciële keuzes, marketing die niet rendeert, salesopvolging en digitale systemen.',
}

export default function InzichtenPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="05 — Inzichten"
        title="Denken vóór doen."
        intro={
          <p>
            Artikels over commerciële keuzes, marketing die niet rendeert,
            salesopvolging, digitale systemen en de vraag die vóór elke
            investering moet komen: waar loopt het werkelijk vast?
          </p>
        }
      />

      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-hairline bg-hairline md:grid-cols-2">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 2) * 90} className="bg-card">
                <Link
                  href={`/inzichten/${article.slug}`}
                  className="group/article flex h-full flex-col gap-5 p-8 transition-colors duration-500 hover:bg-[#fbfaf7] md:p-10"
                >
                  <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-ink/50">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.author}</span>
                  </div>
                  <h2 className="font-display text-[26px] font-medium leading-snug text-ink text-balance">
                    {article.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[14px] font-medium text-amber">
                    Lees artikel
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/article:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
