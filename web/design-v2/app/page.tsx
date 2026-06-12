import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Diagnose } from '@/components/diagnose'
import { Aanpak } from '@/components/aanpak'
import { Cases } from '@/components/cases'
import { RealityCheck } from '@/components/reality-check'
import { Inzichten } from '@/components/inzichten'
import { Architecture } from '@/components/architecture'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-offwhite">
      <SiteNav />
      <Hero />
      <Intro />
      <Diagnose />
      <Aanpak />
      <Cases />
      <RealityCheck />
      <Inzichten />
      <Architecture />
      <SiteFooter />
    </main>
  )
}
