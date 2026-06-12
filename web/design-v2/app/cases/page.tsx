import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Eyebrow, SectionTitle } from '@/components/section-bits'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Cases — ORYEN',
  description:
    'Niet wat we doen. Wat het oplevert. Elke case begon met een keuze: eerst de richting bepalen, dan het systeem bouwen.',
}

type CaseStat = { value: string; label: string }
type CaseItem = {
  index: string
  kicker: string
  title: string
  context: string
  stats: CaseStat[]
  statsNote?: string
  choice: string
  result: string
}

const cases: CaseItem[] = [
  {
    index: '01 — Case',
    kicker: 'Distributie & merkhefboom',
    title: 'Van bijna offline naar 52K volgers.',
    context:
      'Vijf jaar geleden was Hof van Cleve een driesterrenrestaurant met een onaantastbare reputatie offline — en nauwelijks aanwezigheid online. Een community ontbrak. Geen herkenbare stijl, geen consequente aanwezigheid. Het toekomstig clienteel — een jongere generatie met andere mediagewoonten — bouwde geen binding op met het merk.',
    stats: [
      { value: '52K', label: 'Volgers (organisch)' },
      { value: '297K', label: 'Impressies / maand' },
      { value: '6.9K', label: 'Interacties / maand' },
      { value: '0€', label: 'Ads-budget' },
    ],
    choice:
      'Niet commercieel zichtbaarder maken. Wel het merk aantrekkelijk maken bij een nieuwe generatie zonder de klasse te verliezen.',
    result:
      'Vier jaar gericht werken aan betrokkenheid en jeugdiger merkgevoel. Geen wedstrijden, geen kortingen, geen harde push — wel een duidelijke lijn in beeldtaal, consequente aanwezigheid, openheid over het proces in de keuken en ruimte voor het verhaal van Peter, Lieve en het team. Tot een jongere overnemer de fakkel kon overnemen, met een community die mee overstapte.',
  },
  {
    index: '02 — Case',
    kicker: 'Vindbaarheid als systeem',
    title: '6 jaar SEO-dominantie in een verzadigde markt.',
    context:
      'Sterk vakmanschap, een degelijk product, een loyale klantenkring. Maar online nauwelijks vindbaar in een sector waarin klanten hun keuze vandaag online voorbereiden. Concurrenten met grotere advertentiebudgetten domineerden de eerste pagina van Google. Verkoop hing af van mond-tot-mond en lokale reputatie — niet van een herhaalbaar systeem.',
    stats: [
      { value: '51', label: 'Keywords top 3' },
      { value: '332', label: 'Totaal rankings' },
      { value: '6', label: 'Jaar partnership' },
      { value: '3×', label: 'Merk van het jaar' },
    ],
    statsNote:
      'SEO-prestaties — extract dashboard, 2024. Een momentopname uit een lopende rapportage. De cijfers volgen de evolutie over zes jaar partnership.',
    choice:
      'Niet eerst meer reclame. Eerst de digitale aansluiting maken die er nog niet was.',
    result:
      'Eén strategische keuze: thema-architectuur boven losse content. Geen losse campagnes, geen advertentiebudget als hefboom — wel een systeem dat gebouwd werd om te blijven werken, ook zonder voortdurende heractivering. Zes jaar later blijven tientallen kernzoektermen bovenaan, drie jaar op rij Merk van het Jaar in de sector, en groeit het bedrijf vanuit instroom in plaats van inspanning.',
  },
  {
    index: '03 — Case',
    kicker: 'Instroommachine (CRM-ready)',
    title: 'Van chaos naar systeem. 240 leads per maand.',
    context:
      'Een industrieel bedrijf met activiteiten in zowel B2B (industriële verbindingssystemen voor de bouwsector) als B2C (eindgebruikers via gespecialiseerde dealers). Sterk product, gevestigde reputatie, een loyaal klantenbestand opgebouwd over jaren. Maar de commerciële instroom liep grillig: leads kwamen vanuit verschillende kanalen zonder samenhang, opvolging gebeurde ad-hoc, en niemand had overzicht over wat werkelijk werkte. Het management voelde dat er meer in zat — maar wist niet waar de blokkade zat.',
    stats: [
      { value: '240', label: 'Leads / maand' },
      { value: '40%', label: 'Uit inbound + SEO' },
      { value: '4', label: 'Kanalen geïntegreerd' },
      { value: 'B2B+B2C', label: 'Twee sporen' },
    ],
    statsNote: 'Identiteit op verzoek confidentieel.',
    choice:
      'Niet meer kanalen toevoegen. Eerst de bestaande pipeline zichtbaar maken.',
    result:
      'De Reality Check toonde dat het probleem niet zat in zichtbaarheid of vraag — wel in opvolging en samenhang tussen B2B en B2C-werking. Daarna pas: pipeline opgezet, vier kanalen geïntegreerd, CRM ingericht voor beide commerciële sporen. 240 leads per maand, meetbaar, opvolgbaar, en met 40% van de instroom uit inbound en SEO — een verschuiving van afhankelijkheid naar systeem. Op vraag van de klant blijft de naam confidentieel.',
  },
]

export default function CasesPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="00 — Cases"
        title={
          <>
            Niet wat we doen. Wat het oplevert.
          </>
        }
        intro={
          <p>
            Elke case begon met een keuze: eerst de richting bepalen, dan het
            systeem bouwen. Dit zijn de resultaten.
          </p>
        }
      >
        <CTAButton href="/contact" variant="amber">
          Plan een Reality Check-gesprek met Christophe
        </CTAButton>
      </PageHero>

      {cases.map((item, i) => {
        const isPine = i % 2 === 1
        return (
          <section
            key={item.index}
            className={
              isPine
                ? 'bg-pine text-pine-foreground'
                : 'bg-offwhite text-ink'
            }
          >
            <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <Eyebrow tone={isPine ? 'light' : 'dark'}>
                      {item.index} · {item.kicker}
                    </Eyebrow>
                  </Reveal>
                  <Reveal delay={80}>
                    <SectionTitle
                      tone={isPine ? 'light' : 'dark'}
                      className="mt-5"
                    >
                      {item.title}
                    </SectionTitle>
                  </Reveal>

                  {/* Stats */}
                  <Reveal delay={160}>
                    <div
                      className={`mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] ${
                        isPine ? 'bg-pine-hairline' : 'bg-hairline'
                      }`}
                    >
                      {item.stats.map((s) => (
                        <div
                          key={s.label}
                          className={`flex flex-col gap-1 p-5 ${
                            isPine ? 'bg-pine' : 'bg-card'
                          }`}
                        >
                          <span className="font-display text-[1.9rem] leading-none text-amber">
                            {s.value}
                          </span>
                          <span
                            className={`text-[12px] uppercase tracking-[0.12em] ${
                              isPine ? 'text-pine-foreground/55' : 'text-ink/55'
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                  {item.statsNote && (
                    <Reveal delay={220}>
                      <p
                        className={`mt-4 text-[13px] leading-relaxed ${
                          isPine ? 'text-pine-foreground/50' : 'text-ink/50'
                        }`}
                      >
                        {item.statsNote}
                      </p>
                    </Reveal>
                  )}
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={120}>
                    <p
                      className={`max-w-[680px] text-[17px] leading-relaxed ${
                        isPine ? 'text-pine-foreground/75' : 'text-ink/80'
                      }`}
                    >
                      {item.context}
                    </p>
                  </Reveal>
                  <Reveal delay={200}>
                    <p
                      className={`mt-8 max-w-[680px] border-l-2 border-amber pl-5 font-display text-[20px] leading-snug text-balance ${
                        isPine ? 'text-pine-foreground' : 'text-ink'
                      }`}
                    >
                      {item.choice}
                    </p>
                  </Reveal>
                  <Reveal delay={260}>
                    <p
                      className={`mt-8 max-w-[680px] text-[16px] leading-relaxed ${
                        isPine ? 'text-pine-foreground/70' : 'text-ink/75'
                      }`}
                    >
                      {item.result}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Meer cases / CTA */}
      <section className="bg-pine text-pine-foreground">
        <div className="mx-auto max-w-[920px] px-6 py-24 text-center md:py-32">
          <Reveal>
            <Eyebrow tone="light">Meer cases beschikbaar</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-relaxed text-pine-foreground/80">
              Veel van het werk dat ORYEN doet, gebeurt onder
              vertrouwelijkheid. Sectorgevoelige trajecten, interne
              herstructureringen of strategische heroriëntaties komen niet
              publiek. Voor referenties die passen bij uw eigen sector of
              context, plan een gesprek met Christophe.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex justify-center">
              <CTAButton href="/contact" variant="amber">
                Plan een Reality Check-gesprek met Christophe
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
