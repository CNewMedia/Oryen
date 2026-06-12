import { parseDiagnosisBody } from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { Eyebrow, SectionTitle } from '@/components/home/v2/section-bits';
import type { HomeContent } from '@/types/home-content';

type Props = {
  diagnosis: HomeContent['diagnosis'];
};

export function HomeDiagnose({ diagnosis }: Props) {
  const { listItems, paragraphs, closingLine } = parseDiagnosisBody(
    diagnosis.p1,
    diagnosis.focus,
  );
  const headline = diagnosis.headlineEm.replace(/\n+/g, ' ').trim();

  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 md:pb-32">
        <div className="border-t border-hairline pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>{diagnosis.spine}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <SectionTitle className="mt-5">{headline}</SectionTitle>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ul className="flex flex-col gap-1.5 text-[17px] leading-relaxed text-ink/75">
                  {listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
              {paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={200 + i * 60}>
                  <p className="mt-8 max-w-[680px] text-[17px] leading-relaxed text-ink/80">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
              {closingLine && (
                <Reveal delay={260}>
                  <p className="mt-6 max-w-[680px] font-display text-[20px] leading-snug text-ink text-balance">
                    {closingLine}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
