import Link from 'next/link'
import { Eyebrow, SectionTitle } from './section-bits'
import { Reveal } from './reveal'

const cases = [
  {
    name: 'Hof van Cleve',
    body: 'Een driesterrenrestaurant met onaantastbare reputatie, maar weinig binding bij een jonger publiek dat het toekomstig cliënteel moest worden. Niet commercieel zichtbaarder maken. Wel het merk aantrekkelijk maken bij een nieuwe generatie zonder de klasse te verliezen. Vier jaar gericht werken aan betrokkenheid en jeugdiger merkgevoel, tot een jongere overnemer de fakkel kon overnemen.',
  },
  {
    name: 'Willems Veranda',
    body: 'Sterk vakmanschap, maar online nauwelijks vindbaar — en dus afgesloten van hoe klanten vandaag zoeken en kiezen. Niet eerst meer reclame. Eerst de digitale aansluiting maken die er nog niet was. Dat maakte het merk structureel beter vindbaar, met tientallen kernzoektermen in de top drie.',
  },
  {
    name: 'Concordia Textiles',
    body: 'Digitalisering die intern vastliep op uiteenlopende verwachtingen en een complexe structuur. Niet meteen uitrollen. Eerst intern op één lijn krijgen wat haalbaar, wenselijk en prioritair was. Dat maakte de digitalisering uitvoerbaar, met draagvlak en duidelijke prioriteiten.',
  },
  {
    name: 'BMW — lokale dealer',
    body: 'Sterke positie, maar communicatief niet te onderscheiden van andere dealers in de regio. Niet eerst meer budget. Eerst kiezen wat hen lokaal écht anders maakte. Dat bracht opnieuw digitale aanvragen op gang uit de eigen regio.',
  },
]

export function Cases() {
  return (
    <section id="cases" className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>03 — Bewijs</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle className="mt-5">
                ORYEN bepaalde eerst de richting. Daarna pas de uitvoering.
              </SectionTitle>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 90} className="bg-card">
              <article className="group/card relative flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-[#fbfaf7]">
                <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-amber transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-y-100" />
                <h3 className="font-display text-[24px] font-medium text-ink">
                  {item.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/75">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="#cases"
            className="group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-amber focus-visible:outline-none focus-visible:text-amber"
          >
            Bekijk alle cases
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
