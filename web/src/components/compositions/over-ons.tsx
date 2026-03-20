import { PageHero } from '@/components/blocks/page-hero';
import { SectionHeader } from '@/components/blocks/section-header';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';
import { Card, CardTitle } from '@/components/ui/card';

const team = [
  { name: '[Name]', role: '[Role]' },
  { name: '[Name]', role: '[Role]' },
  { name: '[Name]', role: '[Role]' },
] as const;

export function OverOnsComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Studio]"
            title="[Page headline — 8–12 words]"
            lede="[Intro — two sentences, ~240 characters.]"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="max-w-prose-wide space-y-8">
          <SectionHeader
            eyebrow="[Principles]"
            title="[What shapes the work — 6–10 words]"
          />
          <PlaceholderLines lines={6} />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="[People]"
            title="[Team / advisors — 4–7 words]"
            lede="[One sentence, ~120 characters.]"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Card key={i} className="p-8">
                <div className="aspect-[4/3] rounded-sm bg-line/60" aria-hidden />
                <CardTitle className="mt-6 text-xl">{m.name}</CardTitle>
                <p className="mt-2 text-body-sm text-ink-muted">{m.role}</p>
                <div className="mt-4">
                  <PlaceholderLines lines={2} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
