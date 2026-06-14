import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — ORYEN',
  description:
    'Vertel kort wat er speelt. Christophe leest mee en antwoordt binnen één werkdag.',
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Contact"
        title="Vertel kort wat er speelt."
        intro={
          <p>
            Christophe leest mee. Antwoord binnen één werkdag, of we bekijken
            samen of een Reality Check past.
          </p>
        }
      />

      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-[24px] font-medium text-ink">
                  Contactformulier
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-[14px] leading-relaxed text-ink/60">
                  Liever rechtstreeks mailen? Antwoord binnen één werkdag van
                  Christophe.
                </p>
              </Reveal>
            </div>

            {/* Side info */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="flex flex-col gap-8 rounded-[var(--radius)] border border-hairline bg-card p-8">
                  <div>
                    <span className="text-[13px] uppercase tracking-[0.18em] text-amber">
                      Wat u mag verwachten
                    </span>
                    <p className="mt-4 text-[16px] leading-relaxed text-ink/80">
                      Geen doorschuifsysteem. Geen algemeen salesgesprek. Wel een
                      eerste reactie die scherp bekijkt of dit inhoudelijk past.
                    </p>
                  </div>

                  <div className="border-t border-hairline pt-6">
                    <span className="font-display text-[18px] font-semibold tracking-[0.1em] text-ink">
                      ORYEN
                    </span>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                      Rechtstreeks antwoord van Christophe wanneer het
                      inhoudelijk past. Geen verborgen funnel. Wel een eerlijk
                      eerste antwoord.
                    </p>
                  </div>

                  <div className="border-t border-hairline pt-6">
                    <span className="text-[13px] uppercase tracking-[0.18em] text-ink/50">
                      Gegevens
                    </span>
                    <dl className="mt-4 flex flex-col gap-3 text-[15px] text-ink/80">
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 text-ink/50">Merk</dt>
                        <dd>ORYEN</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 text-ink/50">Adres</dt>
                        <dd>
                          Ottergemsesteenweg Zuid 808 b125
                          <br />
                          9000 Gent
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
