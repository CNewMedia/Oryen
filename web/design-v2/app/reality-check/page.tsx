import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { RealityCheck } from '@/components/reality-check'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Reality Check — ORYEN',
  description:
    'Een scherp eerste beslismoment. Eén compacte commerciële scorecard die toont waar het vastloopt en wat eerst moet.',
}

export default function RealityCheckPage() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Reality Check"
        title="Een scherp eerste beslismoment."
        intro={
          <p>
            De Reality Check is het eerste betaalde moment waarin ORYEN scherp
            krijgt waar sales, marketing en opvolging resultaat verliezen — en
            welke ingreep eerst verschil maakt.
          </p>
        }
      >
        <CTAButton href="/contact" variant="amber">
          Plan een Reality Check-gesprek met Christophe
        </CTAButton>
      </PageHero>

      <RealityCheck />

      <SiteFooter />
    </main>
  )
}
