import { CTAButton } from '@/components/home/v2/cta-button';
import { parseRecognitionBody } from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { SectionTitle } from '@/components/home/v2/section-bits';
import type { HomeContent } from '@/types/home-content';

type Props = {
  recognition: HomeContent['recognition'];
};

export function HomeIntro({ recognition }: Props) {
  const { listItems, emphasisLine, middleLine, closingQuestion } = parseRecognitionBody(
    recognition.body,
  );

  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTitle>{recognition.headline}</SectionTitle>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="flex flex-col gap-1.5 text-[17px] leading-relaxed text-ink/75">
                {listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            {emphasisLine && (
              <Reveal delay={160}>
                <p className="mt-8 max-w-[620px] text-[19px] leading-relaxed text-ink/85">
                  {emphasisLine.before}
                  <span className="font-medium text-ink">{emphasisLine.highlight}</span>
                </p>
              </Reveal>
            )}
            {middleLine && (
              <Reveal delay={220}>
                <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-ink/75">
                  {middleLine}
                </p>
              </Reveal>
            )}
            {closingQuestion && (
              <Reveal delay={280}>
                <p className="mt-4 max-w-[620px] font-display text-[22px] leading-snug text-ink text-balance">
                  {closingQuestion}
                </p>
              </Reveal>
            )}
            <Reveal delay={340}>
              <div className="mt-9">
                <CTAButton href="#reality-check" variant="ghost-dark">
                  {recognition.cta}
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
