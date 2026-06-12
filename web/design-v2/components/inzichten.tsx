import { Eyebrow, SectionTitle } from './section-bits'
import { CTAButton } from './cta-button'
import { Reveal } from './reveal'

export function Inzichten() {
  return (
    <section id="inzichten" className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>05 — Inzichten</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle className="mt-5">Denken vóór doen.</SectionTitle>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                Artikels over commerciële keuzes, marketing die niet rendeert,
                salesopvolging, digitale systemen en de vraag die vóór elke
                investering moet komen:
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-[680px] font-display text-[24px] leading-snug text-ink text-balance">
                waar loopt het werkelijk vast?
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9">
                <CTAButton href="/inzichten" variant="ghost-dark">
                  Bekijk de inzichten
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
