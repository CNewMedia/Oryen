import { CTAButton } from './cta-button'
import { Eyebrow, SectionTitle } from './section-bits'
import { Reveal } from './reveal'

const exclusions = [
  'Geen vrijblijvende intake.',
  'Geen verkoopgesprek in vermomming.',
  'Geen lange lijst met losse aanbevelingen.',
]

const scorecard = [
  'waar het commercieel vastloopt',
  'wat nu prioriteit heeft',
  'wat beter nog wacht',
  'welke volgende stap logisch is',
  'wat u beter niet doet vóór de basis klopt',
]

export function RealityCheck() {
  return (
    <section id="reality-check" className="bg-pine text-pine-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">04 — Reality Check</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle tone="light" className="mt-5">
                Een scherp eerste beslismoment.
              </SectionTitle>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-pine-foreground/75">
                De Reality Check is het eerste betaalde moment waarin ORYEN
                scherp krijgt waar sales, marketing en opvolging resultaat
                verliezen — en welke ingreep eerst verschil maakt.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 flex flex-col gap-1.5 text-[16px] leading-relaxed text-pine-foreground/65">
                {exclusions.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-[520px] text-[15px] leading-relaxed text-pine-foreground/65">
                Daarna beslist u zelf of u zelfstandig verdergaat, met uw
                bestaande partners werkt, of ORYEN inschakelt voor verdere
                begeleiding of digitale productbouw via ORYEN Solutions.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="grain relative overflow-hidden rounded-[var(--radius)] border border-pine-hairline bg-[rgba(246,245,241,0.05)] p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-md md:p-10">
                {/* Accent top rule */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/70 to-transparent" />
                <div className="flex items-baseline justify-between gap-4 border-b border-pine-hairline pb-6">
                  <span className="text-[13px] uppercase tracking-[0.18em] text-pine-foreground/60">
                    Commerciële scorecard
                  </span>
                  <span className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none text-amber">
                    €2.950
                    <span className="ml-2 align-middle font-sans text-[14px] font-normal tracking-normal text-pine-foreground/55">
                      excl. btw
                    </span>
                  </span>
                </div>

                <p className="mt-6 text-[14px] uppercase tracking-[0.16em] text-pine-foreground/55">
                  Eén compacte scorecard met
                </p>

                <ul className="mt-4 flex flex-col">
                  {scorecard.map((item, i) => (
                    <li
                      key={item}
                      className={`group/row flex items-baseline gap-4 py-3.5 transition-colors duration-300 hover:text-pine-foreground ${
                        i !== scorecard.length - 1
                          ? 'border-b border-pine-hairline'
                          : ''
                      }`}
                    >
                      <span className="text-[12px] tabular-nums text-amber/80 transition-transform duration-300 group-hover/row:translate-x-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[16px] leading-relaxed text-pine-foreground/85 transition-colors duration-300 group-hover/row:text-pine-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2 text-[14px] text-pine-foreground/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                  Geen automatisch traject. Rechtstreeks met Christophe.
                </div>

                <div className="mt-7">
                  <CTAButton href="#contact" variant="amber">
                    Plan een Reality Check met Christophe
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
