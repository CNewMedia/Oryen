import { ArticleCard } from '@/components/blocks/article-card';
import { PageHero } from '@/components/blocks/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { insightPath } from '@/lib/routes';

const items = [
  {
    slug: 'placeholder-a',
    title: '[Article title — 8–14 words]',
    date: '[Date label]',
    excerpt: '[Excerpt — two lines, ~160 characters. Not final copy.]',
  },
  {
    slug: 'placeholder-b',
    title: '[Article title — 8–14 words]',
    date: '[Date label]',
    excerpt: '[Excerpt — two lines, ~160 characters. Not final copy.]',
  },
  {
    slug: 'placeholder-c',
    title: '[Article title — 8–14 words]',
    date: '[Date label]',
    excerpt: '[Excerpt — two lines, ~160 characters. Not final copy.]',
  },
  {
    slug: 'placeholder-d',
    title: '[Article title — 8–14 words]',
    date: '[Date label]',
    excerpt: '[Excerpt — two lines, ~160 characters. Not final copy.]',
  },
] as const;

export function InsightsOverviewComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Insights]"
            title="[Overview headline — 8–12 words]"
            lede="[Intro — two sentences, ~220 characters.]"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item) => (
              <ArticleCard
                key={item.slug}
                href={insightPath(item.slug)}
                title={item.title}
                dateLabel={item.date}
                excerpt={item.excerpt}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
