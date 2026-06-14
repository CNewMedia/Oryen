import Image from 'next/image'
import { CTAButton } from './cta-button'
import { PriorityCard } from './priority-card'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-pine text-pine-foreground"
    >
      {/* Atmospheric stone background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-stone.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center opacity-55"
        />
        {/* Scrim: keeps headline razor-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/90 to-pine/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-pine/50" />
        {/* Soft corner vignette */}
        <div className="absolute inset-0 [background:radial-gradient(130%_130%_at_50%_42%,transparent_55%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                {['marketing', 'sales', 'opvolging'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pine-hairline px-3.5 py-1.5 text-[12px] uppercase tracking-[0.16em] text-pine-foreground/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.4rem,5.4vw,4.2rem)] font-normal leading-[1.08] tracking-[-0.01em] text-balance">
                ORYEN maakt duidelijk waar het commercieel vastloopt — en wat
                eerst moet worden aangepakt.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[620px] text-[17px] leading-relaxed text-pine-foreground/75">
                We onderzoeken waarom marketing, sales en opvolging niet het
                resultaat opleveren dat u verwacht, vóór u opnieuw investeert in
                campagnes, tools, websites of extra uitvoerende partners.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href="#reality-check" variant="amber">
                  Plan een Reality Check
                </CTAButton>
                <CTAButton href="#aanpak" variant="ghost-light">
                  Bekijk de aanpak
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={320} className="flex lg:justify-end">
              <PriorityCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
