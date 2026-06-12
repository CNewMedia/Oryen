import { SectionTitle } from './section-bits'
import { CTAButton } from './cta-button'
import { Reveal } from './reveal'

export function Intro() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTitle>Er gebeurt vaak al genoeg.</SectionTitle>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="flex flex-col gap-1.5 text-[17px] leading-relaxed text-ink/75">
                <li>Er wordt gecommuniceerd.</li>
                <li>Er wordt opgevolgd.</li>
                <li>Er worden tools gebruikt.</li>
                <li>Er worden beslissingen genomen.</li>
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[620px] text-[19px] leading-relaxed text-ink/85">
                Maar toch blijft het gevoel:{' '}
                <span className="font-medium text-ink">
                  hier halen we niet uit wat erin zit.
                </span>
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-ink/75">
                De vraag is dan niet of er méér moet gebeuren.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-4 max-w-[620px] font-display text-[22px] leading-snug text-ink text-balance">
                De echte vraag is: waar gaat het vandaag mis — en welke ingreep
                maakt nu echt verschil?
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-9">
                <CTAButton href="#reality-check" variant="ghost-dark">
                  Plan een Reality Check
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
