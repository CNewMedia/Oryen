import type { ReactNode } from 'react'
import { SiteNav } from './site-nav'
import { Reveal } from './reveal'

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="grain relative isolate overflow-hidden bg-pine text-pine-foreground">
      <SiteNav />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(130%_130%_at_50%_30%,transparent_55%,rgba(0,0,0,0.3)_100%)]" />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <Reveal>
          <span className="text-[13px] uppercase tracking-[0.22em] text-amber">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[920px] font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.01em] text-balance">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <div className="mt-7 max-w-[640px] text-[17px] leading-relaxed text-pine-foreground/75">
              {intro}
            </div>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </header>
  )
}
