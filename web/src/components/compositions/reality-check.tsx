import { PageHero } from '@/components/blocks/page-hero';
import { SectionHeader } from '@/components/blocks/section-header';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';
import { ButtonLink } from '@/components/ui/button-link';
import { Card, CardTitle } from '@/components/ui/card';

export function RealityCheckComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Offer label]"
            title="[Page headline — 8–12 words]"
            lede="[Intro — two sentences, ~240 characters.]"
            actions={
              <ButtonLink href="/contact" size="lg">
                [Primary CTA]
              </ButtonLink>
            }
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="[Block A]"
            title="[Section headline — 5–8 words]"
            lede="[Optional lede — one sentence, ~120 characters.]"
          />
          <div className="max-w-prose-wide space-y-8">
            <PlaceholderLines lines={5} />
            <PlaceholderLines lines={4} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="[Block B]"
            title="[Section headline — 5–8 words]"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="p-8">
                <CardTitle>[Subpoint {i} — 6–10 words]</CardTitle>
                <div className="mt-4">
                  <PlaceholderLines lines={3} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="max-w-prose-wide space-y-8">
          <SectionHeader
            eyebrow="[Block C]"
            title="[Closing argument — 6–10 words]"
          />
          <PlaceholderLines lines={6} />
        </Container>
      </Section>
    </>
  );
}
