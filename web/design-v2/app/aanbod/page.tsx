import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Eyebrow, SectionTitle } from '@/components/section-bits'
import { CTAButton } from '@/components/cta-button'
import { Faq } from '@/components/faq'

export const metadata: Metadata = {
  title: 'Reality Check — ORYEN',
  description:
    'Een betaalde doorlichting waarin ORYEN blootlegt waar sales, marketing en opvolging vandaag resultaat verliezen — en welke ingreep eerst verschil maakt.',
}

const output = [
  {
    num: '— 01',
    title: 'Een scherp beeld van waar het vastloopt',
    body: 'Geen losse observaties, maar één helder overzicht.',
  },
  {
    num: '— 02',
    title: 'Een eerste besliskader',
    body: 'Wat nu prioriteit heeft, wat nog wacht, en waarom.',
  },
  {
    num: '— 03',
    title: 'Een 90-dagen koerslijn',
    body: 'Geen jaarplan, wel een korte horizon met focus en een stoplijst van wat u beter niet doet vóór de basis klopt.',
  },
]

const steps = [
  {
    num: 'Stap 01 — Voorbereiding',
    title: 'Voorbereiding',
    body: 'We zetten uw vraag scherp. Waar zit de druk? Welke beslissing hangt er boven de markt? Wat voelt verkeerd, ondanks alle inspanningen?',
  },
  {
    num: 'Stap 02 — De sessie',
    title: 'De sessie',
    body: 'Eén compacte, scherpe sessie, rechtstreeks met Christophe. Afhankelijk van uw vraag schuift een specialist uit het ORYEN-team mee aan. Geen brede brainstorm. Wel een directe doorlichting van oorzaak, volgorde en prioriteit.',
  },
  {
    num: 'Stap 03 — Output en duiding',
    title: 'Output en duiding',
    body: 'U krijgt de uitkomst helder samengebracht en toegelicht. Niet als theoretisch document, maar als materiaal waarmee u intern kan beslissen en gericht verder gaan.',
  },
]

const wel = [
  'U wilt weten wat eerst moet, niet wat het snelst verkocht raakt.',
  'U wilt geen tweede investering vóór de volgorde helder is.',
  'U wilt duidelijkheid waar u intern moet rechtzetten en waar externe hulp pas later zinvol is.',
  'U wilt een eerste besluit, geen stapel indrukken.',
]

const niet = [
  'U zoekt vooral snelle uitvoering zonder gesprek over oorzaak of volgorde.',
  'U wilt bevestigd worden in een beslissing die in feite al genomen is.',
  'U verwacht een agency-menu, een lijst pakketten of een vrijblijvende verkenning.',
]

const faq = [
  {
    q: 'Wat is het verschil tussen ORYEN en een marketingbureau?',
    a: (
      <p>
        Een bureau begint met uitvoering: campagnes, content, een website,
        advertenties. ORYEN begint met de oorzaak. Eerst bepalen waar het
        commercieel vastloopt en wat eerst moet, pas daarna beslissen of er
        überhaupt iets uitgevoerd moet worden — en door wie.{' '}
        <Link
          href="/inzichten/marketingbureau-versus-strategische-doorlichting"
          className="text-amber underline underline-offset-4"
        >
          Lees het volledige verschil tussen bureau en doorlichting.
        </Link>
      </p>
    ),
  },
  {
    q: 'Loont het om eerst een doorlichting te doen vóór je investeert?',
    a: (
      <p>
        Meestal wel. De duurste fout is geld steken in een nieuwe campagne, tool
        of medewerker terwijl de echte blokkade ergens anders zit. Een Reality
        Check brengt die volgorde in beeld vóór u opnieuw tijd, geld of mensen
        inzet.
      </p>
    ),
  },
  {
    q: 'Voor welke bedrijven is een Reality Check zinvol?',
    a: (
      <p>
        Voor B2B-bedrijven die al investeren en bewegen, maar voelen dat het
        resultaat niet in verhouding staat tot de inspanning. Niet voor wie
        vooral snelle uitvoering zoekt of bevestiging wil van een beslissing die
        al genomen is.
      </p>
    ),
  },
  {
    q: 'Wat krijg ik concreet na een Reality Check?',
    a: (
      <p>
        Een helder beeld van waar het vastloopt, een eerste besliskader met
        prioriteiten, en een koerslijn van 90 dagen — inclusief een stoplijst
        van wat u beter nog niet doet.
      </p>
    ),
  },
  {
    q: 'Wat kost een Reality Check?',
    a: (
      <p>
        Een Reality Check start vanaf enkele duizenden euro&apos;s, afhankelijk
        van omvang, aantal stakeholders en de complexiteit van uw systemen. U
        weet de exacte prijs na een kort eerste contact, waarin we eerst nagaan
        of een Reality Check voor u zinvol is.
      </p>
    ),
  },
]

export default function AanbodPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="00 — Reality Check"
        title={
          <>
            De Reality Check. Een scherp eerste beslismoment.
          </>
        }
        intro={
          <>
            <p>
              Een Reality Check is een betaalde doorlichting waarin ORYEN
              blootlegt waar sales, marketing en opvolging vandaag resultaat
              verliezen, welke ingreep eerst verschil maakt, en wat u beter nog
              niet doet. Geen audit, geen brainstorm, geen verkoopgesprek. Eén
              afgebakend beslismoment, rechtstreeks met Christophe.
            </p>
            <p className="mt-5 text-pine-foreground/65">
              Dezelfde aanpak die de basis legde voor cases zoals Hof van Cleve,
              Willems Veranda en Concordia Textiles.
            </p>
          </>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href="/contact" variant="amber">
            Plan een Reality Check-gesprek met Christophe
          </CTAButton>
          <CTAButton href="/contact" variant="ghost-light">
            Stel uw vraag rechtstreeks aan Christophe
          </CTAButton>
        </div>
      </PageHero>

      {/* 01 — Wat u meeneemt */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow>01 — Wat u meeneemt</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle className="mt-5 max-w-[680px]">
              Concrete output. Geen vaag advies.
            </SectionTitle>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
              Na de Reality Check weet u niet alleen wat er wringt, maar ook wat
              daar nu mee moet gebeuren.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-hairline bg-hairline md:grid-cols-3">
            {output.map((item, i) => (
              <Reveal key={item.num} delay={i * 90} className="bg-card">
                <div className="flex h-full flex-col gap-4 p-8">
                  <span className="text-[13px] uppercase tracking-[0.18em] text-amber">
                    {item.num}
                  </span>
                  <h3 className="font-display text-[21px] font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Hoe het verloopt */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow tone="light">02 — Hoe het verloopt</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle tone="light" className="mt-5 max-w-[680px]">
              Kort. Rechtstreeks. Zonder omwegen.
            </SectionTitle>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-pine-hairline bg-pine-hairline md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 90} className="bg-pine">
                <div className="flex h-full flex-col gap-4 p-8">
                  <span className="text-[13px] uppercase tracking-[0.18em] text-amber">
                    {step.num}
                  </span>
                  <h3 className="font-display text-[21px] font-medium text-pine-foreground">
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

      {/* 03 — Voor wie */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow>03 — Voor wie</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle className="mt-5 max-w-[760px]">
              De Reality Check is zinvol als u al beslist, investeert en
              beweegt — maar voelt dat de werking niet brengt wat ze zou moeten.
            </SectionTitle>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius)] border border-hairline bg-card p-8">
                <span className="text-[13px] uppercase tracking-[0.18em] text-amber">
                  Wel voor u
                </span>
                <ul className="mt-6 flex flex-col gap-4">
                  {wel.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[16px] leading-relaxed text-ink/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-[var(--radius)] border border-hairline bg-card p-8">
                <span className="text-[13px] uppercase tracking-[0.18em] text-ink/50">
                  Niet voor u
                </span>
                <ul className="mt-6 flex flex-col gap-4">
                  {niet.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[16px] leading-relaxed text-ink/65"
                    >
                      <span className="mt-2 h-px w-3 flex-none bg-ink/30" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="mt-10 max-w-[760px] text-[17px] leading-relaxed text-ink/75">
              Als de Reality Check geen goede fit is, zeggen we dat ook. Het doel
              is niet om u in een traject te trekken, maar om scherp te krijgen
              wat uw eerste stap moet zijn.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 — Volgende stap */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[920px] px-6 py-24 text-center md:py-32">
          <Reveal>
            <Eyebrow tone="light">04 — Volgende stap</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle tone="light" className="mt-6">
              Eerst weten waar het vastloopt. Dan pas kiezen wat nodig is.
            </SectionTitle>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed text-pine-foreground/75">
              Antwoord altijd persoonlijk van Christophe. Geen verplicht
              vervolg, geen automatische upgrade.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <CTAButton href="/contact" variant="amber">
                Plan een Reality Check-gesprek met Christophe
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-[920px] px-6 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle className="mt-5 mb-12">
              Veelgestelde vragen
            </SectionTitle>
          </Reveal>
          <Reveal delay={140}>
            <Faq items={faq} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
