import { ARCHITECTURE_COPY } from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { SectionTitle } from '@/components/home/v2/section-bits';

type Props = {
  locale: string;
};

export function HomeArchitecture({ locale }: Props) {
  const copy = ARCHITECTURE_COPY[locale] ?? ARCHITECTURE_COPY.nl;

  return (
    <section id="over" className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 md:pb-32">
        <div className="border-t border-hairline pt-16">
          <div className="max-w-[760px]">
            <Reveal>
              <SectionTitle>{copy.title}</SectionTitle>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-[17px] leading-relaxed text-ink/75">{copy.intro}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {copy.pillars.map((pillar, i) => (
              <Reveal key={pillar.name} delay={i * 90} className="bg-card">
                <div className="group/pillar flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-[#fbfaf7]">
                  <span className="font-display text-[24px] font-medium tracking-[0.06em] text-ink">
                    {pillar.name}
                  </span>
                  <span className="text-[13px] uppercase tracking-[0.16em] text-amber">
                    {pillar.role}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/70">{pillar.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
