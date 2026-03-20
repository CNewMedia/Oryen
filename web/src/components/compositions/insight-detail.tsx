import { PageHero } from '@/components/blocks/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PlaceholderLines } from '@/components/system/placeholder-lines';

type InsightDetailCompositionProps = {
  slug: string;
};

export function InsightDetailComposition({
  slug,
}: InsightDetailCompositionProps) {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container className="max-w-prose-wide">
          <PageHero
            eyebrow="[Insight]"
            title="[Headline — maps to CMS when connected]"
            lede={
              <span className="text-body-sm text-ink-muted">
                [Publish metadata — date · reading time. Slug: {slug}]
              </span>
            }
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="mx-auto max-w-prose space-y-10">
            <PlaceholderLines lines={6} />
            <PlaceholderLines lines={5} />
            <blockquote className="border-l-2 border-accent pl-6 font-display text-xl text-ink">
              [Pull quote — optional, 1–2 sentences.]
            </blockquote>
            <PlaceholderLines lines={7} />
          </div>
        </Container>
      </Section>
    </>
  );
}
