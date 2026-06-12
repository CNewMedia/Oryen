import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Eyebrow, SectionTitle } from '@/components/section-bits'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Over ORYEN — ORYEN',
  description:
    'ORYEN bestaat om de vraag scherp te krijgen vóór er opnieuw wordt geïnvesteerd. Richting vóór uitvoering, met Christophe als strategisch ankerpunt.',
}

const network = [
  { name: 'Esthel Vandenbulcke', role: 'Commerciële opvolging & klantrealiteit' },
  { name: 'Filip VandeCasteye', role: 'Verhaal, inhoud & positionering' },
  { name: 'Stevie Van Meirhaeghe', role: 'Sales leadership & verkoopstructuur' },
  { name: 'Koen Verniers', role: 'Strategische leiding & prioriteiten' },
  { name: 'Myrthille Versteghen', role: 'Marketingflow & coördinatie' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

export default function TeamPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Over ORYEN"
        title={
          <>
            Over ORYEN. Richting vóór uitvoering.
          </>
        }
        intro={
          <p>
            ORYEN is ontstaan uit één eenvoudige vaststelling: bedrijven doen
            vaak al veel, maar weten niet altijd waarom het commerciële
            resultaat achterblijft. Er wordt geïnvesteerd in marketing, sales,
            websites, tools, campagnes en opvolging. Toch blijft dezelfde vraag
            terugkomen: waarom brengt dit niet op wat het zou moeten opbrengen?
            ORYEN bestaat om die vraag scherp te krijgen vóór er opnieuw wordt
            geïnvesteerd.
          </p>
        }
      />

      {/* Christophe als ankerpunt */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Ankerpunt</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <SectionTitle className="mt-5">
                  Christophe als strategisch ankerpunt
                </SectionTitle>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8 flex items-center gap-4 rounded-[var(--radius)] border border-hairline bg-card p-5">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-pine font-display text-[18px] text-amber">
                    CD
                  </span>
                  <div>
                    <p className="font-display text-[18px] font-medium text-ink">
                      Christophe Dejaeghere
                    </p>
                    <p className="text-[14px] text-ink/60">
                      Oprichter & strategisch ankerpunt
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <p className="max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  ORYEN wordt geleid door Christophe Dejaeghere. Christophe werkt
                  al meer dan 23 jaar op het kruispunt van merken, marketing,
                  digitale systemen en commerciële groei. Hij kent uitvoering van
                  binnenuit: positionering, websites, content, CRM, HubSpot,
                  campagnes en commerciële opvolging.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                  Maar ORYEN vertrekt niet vanuit uitvoering. De kracht zit in
                  het herkennen van patronen: zien waar losse initiatieven
                  elkaar versterken — of net tegenwerken. Waar marketing
                  zichtbaar is, maar geen beweging brengt. Waar sales inzet
                  toont, maar opvolging versnipperd raakt. Waar tools aanwezig
                  zijn, maar geen grip geven.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 max-w-[680px] border-l-2 border-amber pl-5 font-display text-[20px] leading-snug text-ink text-balance">
                  De vraag is zelden: wat moeten we nog meer doen? De betere
                  vraag is meestal: wat klopt er vandaag niet in de volgorde?
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Geen klassieke bureaustructuur + Waar ORYEN naar kijkt + Van diagnose naar uitvoering */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
            <Reveal>
              <h3 className="font-display text-[22px] font-medium text-pine-foreground">
                Geen klassieke bureaustructuur
              </h3>
              <p className="mt-5 text-[16px] leading-relaxed text-pine-foreground/70">
                ORYEN werkt niet met accountmanagement, doorschuifsystemen of
                lagen tussen analyse en beslissing. U werkt rechtstreeks met
                Christophe als strategisch ankerpunt. Afhankelijk van de vraag
                worden mensen uit het ORYEN-netwerk betrokken waar hun ervaring
                werkelijk iets toevoegt.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="font-display text-[22px] font-medium text-pine-foreground">
                Waar ORYEN naar kijkt
              </h3>
              <p className="mt-5 text-[16px] leading-relaxed text-pine-foreground/70">
                ORYEN kijkt naar de volledige commerciële keten: positionering,
                marketing, sales, opvolging, digitale systemen, interne
                afstemming, en keuzes die te vroeg of zonder samenhang werden
                gemaakt. Niet om overal tegelijk aan te werken. Wel om te
                bepalen waar het vandaag echt vastloopt.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="font-display text-[22px] font-medium text-pine-foreground">
                Van diagnose naar uitvoering
              </h3>
              <p className="mt-5 text-[16px] leading-relaxed text-pine-foreground/70">
                Wanneer uit de diagnose blijkt dat een website, platform,
                CRM-flow of digitaal systeem de groei blokkeert, kan ORYEN de
                richting vertalen naar tastbare digitale producten via ORYEN
                Solutions. ORYEN bepaalt waar het commercieel vastloopt. ORYEN
                Solutions helpt bouwen wat nodig is om die frictie weg te nemen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Netwerk */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Netwerk</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle className="mt-5 max-w-[680px]">
              Mensen rond ORYEN
            </SectionTitle>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
              ORYEN werkt met een klein netwerk van vertrouwde profielen.
              Afhankelijk van de vraag kan Christophe mensen betrekken met
              ervaring in sales, commerciële opvolging, positionering,
              bedrijfsleiding, marketingcoördinatie of digitale uitvoering. Niet
              als vaste bureaulaag. Wel als gerichte versterking wanneer dat
              nodig is.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {network.map((person, i) => (
              <Reveal key={person.name} delay={i * 80}>
                <div className="flex h-full flex-col gap-5 rounded-[var(--radius)] border border-hairline bg-card p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pine font-display text-[17px] text-amber">
                    {initials(person.name)}
                  </span>
                  <div>
                    <p className="font-display text-[19px] font-medium text-ink">
                      {person.name}
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/65">
                      {person.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Volgende stap */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[920px] px-6 py-24 text-center md:py-32">
          <Reveal>
            <Eyebrow tone="light">Volgende stap</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle tone="light" className="mt-6">
              Volgende stap
            </SectionTitle>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-pine-foreground/75">
              De Reality Check is het eerste betaalde moment waarin ORYEN scherp
              krijgt waar sales, marketing en opvolging resultaat verliezen — en
              welke ingreep eerst verschil maakt. Geen vrijblijvende intake. Geen
              verkoopgesprek in vermomming. Geen automatisch traject.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <CTAButton href="/contact" variant="amber">
                Plan een Reality Check met Christophe
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
