import { CtaBlock } from '@/components/blocks/cta-block';
import { PageHero } from '@/components/blocks/page-hero';
import { SectionHeader } from '@/components/blocks/section-header';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';
import { ButtonLink } from '@/components/ui/button-link';

type CaseStudyDetailCompositionProps = {
  slug: string;
};

export function CaseStudyDetailComposition({
  slug,
}: CaseStudyDetailCompositionProps) {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Case study]"
            title="[Title — maps to CMS when connected]"
            lede={`[Client / sector line — ~120 characters. Slug for dev: ${slug}]`}
            actions={
              <ButtonLink href="/contact" variant="secondary" size="md">
                [Primary CTA]
              </ButtonLink>
            }
          />
          <div
            className="mt-12 aspect-[21/9] w-full rounded-sm bg-line/70"
            aria-hidden
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="space-y-6 text-body-sm text-ink-muted lg:col-span-4">
            <p className="text-label font-medium uppercase text-ink-muted">
              [Facts]
            </p>
            <dl className="space-y-4">
              {['[Client]', '[Sector]', '[Scope]', '[Year]'].map((k) => (
                <div key={k}>
                  <dt className="font-medium text-ink">{k}</dt>
                  <dd className="mt-1">[Value]</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="max-w-prose lg:col-span-8 lg:col-start-5">
            <PlaceholderLines lines={6} />
            <div className="mt-10">
              <PlaceholderLines lines={5} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="[Outcome]"
            title="[Results block — 6–10 words]"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-t border-line pt-6">
                <p className="font-display text-3xl text-ink">[00]</p>
                <p className="mt-2 text-body-sm text-ink-muted">
                  [Metric label — one line.]
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <CtaBlock
            eyebrow="[Next]"
            title="[Related CTA — 6–9 words]"
            supporting="[One sentence — ~140 characters.]"
            actions={
              <>
                <ButtonLink href="/contact" size="lg">
                  [Primary CTA]
                </ButtonLink>
                <ButtonLink href="/casestudies" variant="secondary" size="lg">
                  [Secondary CTA]
                </ButtonLink>
              </>
            }
          />
        </Container>
      </Section>
    </>
  );
}
