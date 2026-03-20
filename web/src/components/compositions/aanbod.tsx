import { PageHero } from '@/components/blocks/page-hero';
import { SectionHeader } from '@/components/blocks/section-header';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';
import { Card, CardTitle } from '@/components/ui/card';

const pillars = [
  { n: '01', title: '[Pillar title — 4–7 words]' },
  { n: '02', title: '[Pillar title — 4–7 words]' },
  { n: '03', title: '[Pillar title — 4–7 words]' },
] as const;

export function AanbodComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Offer label]"
            title="[Page headline — 8–12 words]"
            lede="[Intro — two sentences, ~220 characters.]"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow="[Structure]"
            title="[How engagements are organized — 6–10 words]"
            lede="[One supporting sentence, ~120 characters.]"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.n} className="flex flex-col p-8">
                <p className="text-label font-medium uppercase text-ink-muted">
                  {p.n}
                </p>
                <CardTitle className="mt-4 text-2xl">{p.title}</CardTitle>
                <div className="mt-5 flex-1">
                  <PlaceholderLines lines={4} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-prose-wide space-y-8">
          <SectionHeader
            eyebrow="[Engagement]"
            title="[Delivery model — 6–9 words]"
          />
          <PlaceholderLines lines={5} />
        </Container>
      </Section>
    </>
  );
}
