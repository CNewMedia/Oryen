import { CTAButton } from '@/components/home/v2/cta-button';
import { parseInsightsIntro } from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { Eyebrow, SectionTitle } from '@/components/home/v2/section-bits';
import type { HomeContent } from '@/types/home-content';

type Props = {
  insights: HomeContent['insights'];
};

export function HomeInsightsTeaser({ insights }: Props) {
  const { lead, question } = parseInsightsIntro(insights.intro);

  return (
    <section id="inzichten" className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{insights.spine}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle className="mt-5">{insights.headline}</SectionTitle>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                {lead}
              </p>
            </Reveal>
            {question && (
              <Reveal delay={180}>
                <p className="mt-6 max-w-[680px] font-display text-[24px] leading-snug text-ink text-balance">
                  {question}
                </p>
              </Reveal>
            )}
            <Reveal delay={240}>
              <div className="mt-9">
                <CTAButton href="/insights" variant="ghost-dark">
                  {insights.cta}
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
