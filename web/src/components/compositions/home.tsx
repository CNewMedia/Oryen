import { CtaBlock } from '@/components/blocks/cta-block';
import { CaseStudyCard } from '@/components/blocks/case-study-card';
import { PageHero } from '@/components/blocks/page-hero';
import { SectionHeader } from '@/components/blocks/section-header';
import { StatBlock } from '@/components/blocks/stat-block';
import { TestimonialBlock } from '@/components/blocks/testimonial-block';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';
import { ButtonLink } from '@/components/ui/button-link';
import { casestudyPath } from '@/lib/routes';

export function HomeComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Eyebrow — 2–4 words]"
            title={
              <>
                [Hero headline
                <span className="text-ink-muted"> — 8–12 words]</span>
              </>
            }
            lede="[Intro — two sentences, ~220 characters. Final copy pending.]"
            actions={
              <>
                <ButtonLink href="/contact" size="lg">
                  [Primary CTA]
                </ButtonLink>
                <ButtonLink href="/aanbod" variant="secondary" size="lg">
                  [Secondary CTA]
                </ButtonLink>
              </>
            }
          />
          <div className="mt-16 max-w-prose-wide border-t border-line/80 pt-12">
            <p className="text-label font-medium uppercase text-ink-muted">
              [Context block · ~45 words]
            </p>
            <div className="mt-6">
              <PlaceholderLines lines={4} label="Placeholder for supporting paragraph" />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            <StatBlock
              label="[Metric A]"
              value="00%"
              description="[One line of context.]"
            />
            <StatBlock
              label="[Metric B]"
              value="00"
              description="[One line of context.]"
            />
            <StatBlock
              label="[Metric C]"
              value="0.0×"
              description="[One line of context.]"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-14">
          <SectionHeader
            eyebrow="[Section label]"
            title="[Case studies — section headline, 4–7 words]"
            lede="[Supporting line — max. 2 lines, ~120 characters.]"
            action={
              <ButtonLink href="/casestudies" variant="ghost" size="md">
                [View all]
              </ButtonLink>
            }
          />
          <div className="grid gap-8 md:grid-cols-3">
            <CaseStudyCard
              href={casestudyPath('placeholder-slug-a')}
              title="[Case study title — 6–10 words]"
              context="[Context — sector / problem frame, ~90 characters.]"
            />
            <CaseStudyCard
              href={casestudyPath('placeholder-slug-b')}
              title="[Case study title — 6–10 words]"
              context="[Context — sector / problem frame, ~90 characters.]"
            />
            <CaseStudyCard
              href={casestudyPath('placeholder-slug-c')}
              title="[Case study title — 6–10 words]"
              context="[Context — sector / problem frame, ~90 characters.]"
            />
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="max-w-prose-wide">
          <TestimonialBlock
            quote="[Quote — 2–3 sentences, ~240 characters. Not final testimonial.]"
            name="[Name]"
            role="[Role, organization]"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CtaBlock
            eyebrow="[CTA eyebrow]"
            title="[CTA headline — 6–9 words]"
            supporting="[Supporting sentence — ~140 characters. Conversion intent only.]"
            actions={
              <>
                <ButtonLink href="/contact" size="lg">
                  [Primary CTA]
                </ButtonLink>
                <ButtonLink href="/reality-check" variant="secondary" size="lg">
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
