import { CaseStudyCard } from '@/components/blocks/case-study-card';
import { PageHero } from '@/components/blocks/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { casestudyPath } from '@/lib/routes';

const items = [
  { slug: 'placeholder-a', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
  { slug: 'placeholder-b', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
  { slug: 'placeholder-c', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
  { slug: 'placeholder-d', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
  { slug: 'placeholder-e', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
  { slug: 'placeholder-f', title: '[Title — 6–10 words]', ctx: '[Context — ~90 characters.]' },
] as const;

export function CasestudiesOverviewComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Index label]"
            title="[Overview headline — 8–12 words]"
            lede="[Intro — two sentences, ~220 characters.]"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <CaseStudyCard
                key={item.slug}
                href={casestudyPath(item.slug)}
                title={item.title}
                context={item.ctx}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
