import Link from 'next/link'
import { Eyebrow, SectionTitle } from './section-bits'
import { Reveal } from './reveal'

const steps = [
  {
    num: '01',
    title: 'In kaart brengen',
    line: 'Wat gebeurt er vandaag al?',
  },
  {
    num: '02',
    title: 'Resultaat toetsen',
    line: 'Waar blijft het resultaat achter?',
  },
  {
    num: '03',
    title: 'Oorzaak bepalen',
    line: 'Waar zit de echte oorzaak?',
  },
  {
    num: '04',
    title: 'Keuze maken',
    line: 'Wat moet eerst worden aangepakt?',
  },
]

export function Aanpak() {
  return (
    <section id="aanpak" className="bg-pine text-pine-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">02 — Aanpak</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle tone="light" className="mt-5">
                Eerst weten waar resultaat verloren gaat. Dan pas kiezen wat
                nodig is.
              </SectionTitle>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-pine-hairline bg-pine-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="bg-pine">
              <div className="group/step relative flex h-full flex-col gap-4 p-7 transition-colors duration-500 hover:bg-[#22332a]">
                <span className="font-display text-[2.4rem] leading-none text-amber transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/step:-translate-y-0.5">
                  {step.num}
                </span>
                <h3 className="text-[20px] font-medium text-pine-foreground">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-pine-foreground/65">
                  {step.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/aanpak"
            className="group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] text-pine-foreground/80 transition-colors hover:text-amber focus-visible:outline-none focus-visible:text-amber"
          >
            Bekijk de volledige aanpak
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
