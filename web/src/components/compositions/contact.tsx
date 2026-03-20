import { PageHero } from '@/components/blocks/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';

export function ContactComposition() {
  return (
    <>
      <Section variant="default" className="pt-12 md:pt-16">
        <Container>
          <PageHero
            eyebrow="[Contact]"
            title="[Page headline — 8–12 words]"
            lede="[Intro — two sentences, ~220 characters.]"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-label font-medium uppercase text-ink-muted">
              [Direct lines]
            </p>
            <div className="space-y-3 text-body-lg text-ink-muted">
              <p>[Email — placeholder]</p>
              <p>[Phone — placeholder]</p>
              <p>[Location — placeholder]</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="space-y-6 rounded-sm border border-line bg-canvas p-8 md:p-10">
              {['[Name]', '[Email]', '[Organization]', '[Message — ~400 characters]'].map(
                (label, i) => (
                  <label key={i} className="block space-y-2">
                    <span className="text-body-sm font-medium text-ink">{label}</span>
                    <div
                      className="h-11 w-full rounded-sm border border-line bg-canvas-muted"
                      aria-hidden
                    />
                  </label>
                )
              )}
              <div className="h-28 w-full rounded-sm border border-line bg-canvas-muted" aria-hidden />
              <Button type="button" size="lg" className="w-full sm:w-auto">
                [Submit CTA]
              </Button>
              <p className="text-body-sm text-ink-muted">
                [Form disclaimer — one line, ~120 characters.]
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
