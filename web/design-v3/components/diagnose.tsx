import { Eyebrow, SectionTitle } from './section-bits'
import { Reveal } from './reveal'

export function Diagnose() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 md:pb-32">
        <div className="border-t border-hairline pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>01 — Diagnose</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <SectionTitle className="mt-5">
                  Niet elk probleem vraagt meer marketing.
                </SectionTitle>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ul className="flex flex-col gap-1.5 text-[17px] leading-relaxed text-ink/75">
                  <li>Soms zit het probleem in sales.</li>
                  <li>Soms in opvolging.</li>
                  <li>Soms in de propositie.</li>
                  <li>Soms in tools, mensen of interne afstemming.</li>
                  <li>
                    Soms in een keuze die te vroeg of zonder samenhang werd
                    gemaakt.
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  Toch gebeurt vaak hetzelfde: er komt een bureau bij, een
                  nieuwe tool, een extra campagne of meer budget. Terwijl de
                  echte oorzaak nog niet scherp genoeg benoemd is.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 max-w-[680px] font-display text-[20px] leading-snug text-ink text-balance">
                  ORYEN kijkt niet alleen naar wat er gebeurt. We kijken naar
                  wat eronder zit.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
