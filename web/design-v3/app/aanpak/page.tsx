import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Eyebrow, SectionTitle } from '@/components/section-bits'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Aanpak — ORYEN',
  description:
    'Eerst scherp krijgen wat echt speelt. Dan pas beslissen wat volgt. De ORYEN-aanpak in vier stappen.',
}

const steps = [
  {
    num: 'Stap 01',
    title: 'In kaart brengen',
    body: 'Wat gebeurt er vandaag al? We kijken naar aanbod, doelgroep, communicatie, sales, opvolging, tools en interne keuzes. Niet vanuit theorie. Wel vanuit één vraag: wat doet dit vandaag met resultaat?',
  },
  {
    num: 'Stap 02',
    title: 'Resultaat toetsen',
    body: 'Waar blijft het resultaat achter? Niet alleen in cijfers, maar ook in signalen: leads die niet passen, opvolging die te traag of versnipperd loopt, sales die moeite heeft het verschil uit te leggen, marketing die zichtbaar is maar weinig beweging brengt, tools die meer complexiteit dan grip geven, klanten die afhaken of blijven vergelijken.',
  },
  {
    num: 'Stap 03',
    title: 'Oorzaak bepalen',
    body: 'Waar zit de echte oorzaak? In de propositie? In doelgroepkeuze? In sales, marketing, opvolging, tools, mensen, interne afstemming? Of in een beslissing die logisch leek, maar vertrok van een verkeerde aanname? Dat onderscheid maakt het verschil. Wie het verkeerde probleem oplost, blijft investeren zonder wezenlijke vooruitgang.',
  },
  {
    num: 'Stap 04',
    title: 'Keuze maken',
    body: 'Wat moet eerst worden aangepakt? Niet alles tegelijk. Niet nog een lijst met losse acties. Wel een heldere prioriteit: dit eerst. Dit nog niet. Dit stopzetten. Dit anders bekijken. Zo ontstaat richting vóór uitvoering.',
  },
]

export default function AanpakPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="00 — Aanpak"
        title={
          <>
            Eerst scherp krijgen wat echt speelt. Dan pas beslissen wat volgt.
          </>
        }
        intro={
          <>
            <p>
              ORYEN begint niet met campagnes, tools of uitvoering. ORYEN begint
              met blootleggen waar het werkelijk vastloopt — en welke ingreep nu
              het meeste verschil maakt.
            </p>
          </>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href="/contact" variant="amber">
            Plan een Reality Check-gesprek met Christophe
          </CTAButton>
          <CTAButton href="/reality-check" variant="ghost-light">
            Bekijk de Reality Check
          </CTAButton>
        </div>
      </PageHero>

      {/* 01 — Waarom deze aanpak */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>01 — Waarom deze aanpak</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <SectionTitle className="mt-5">
                  Niet sneller bewegen. Eerst juister kijken.
                </SectionTitle>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <p className="max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  Veel organisaties voelen dat er iets stokt, en zetten dan
                  extra tools, campagnes of mensen in vóór de oorzaak scherp is.
                  Het gevolg: zichtbaarheid terwijl opvolging het probleem is.
                  Software vóór een helder proces. Een nieuwe campagne vóór een
                  vaste propositie.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-[680px] font-display text-[20px] leading-snug text-ink text-balance">
                  ORYEN draait dat om. Eerst zicht op wat echt gekend moet
                  worden — pas dan beslissen of investeren.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — De vier stappen */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow tone="light">02 — De vier stappen</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle tone="light" className="mt-5 max-w-[680px]">
              Van onduidelijkheid naar volgorde.
            </SectionTitle>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-pine-hairline bg-pine-hairline md:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 90} className="bg-pine">
                <div className="group/step relative flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-[#22332a] md:p-10">
                  <span className="text-[13px] uppercase tracking-[0.18em] text-amber">
                    {step.num}
                  </span>
                  <h3 className="font-display text-[24px] font-medium text-pine-foreground">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-pine-foreground/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Volgende stap */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>03 — Volgende stap</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <SectionTitle className="mt-5">
                  De Reality Check is de eerste concrete zet.
                </SectionTitle>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <p className="max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  In één compacte doorloop wordt zichtbaar wat vastzit, wat
                  eerst moet gebeuren en wat bewust nog wacht.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  Wat daarna gebeurt, ligt niet vast. Afhankelijk van de
                  uitkomst: bijsturen, korte begeleiding, verdieping — of pas
                  latere uitvoering. Geen verplicht vervolgtraject. Eerst inhoud
                  die klopt.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <CTAButton href="/contact" variant="amber">
                    Plan een Reality Check-gesprek met Christophe
                  </CTAButton>
                  <Link
                    href="/reality-check"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-amber"
                  >
                    Bekijk de Reality Check
                    <span aria-hidden="true">→</span>
                  </Link>
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
