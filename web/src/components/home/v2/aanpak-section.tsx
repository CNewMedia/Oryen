import { Link } from '@/i18n/navigation';
import { joinHeadline } from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { HomeSectionContainer } from '@/components/home/v2/section-container';
import { Eyebrow, SectionTitle } from '@/components/home/v2/section-bits';
import type { HomeContent } from '@/types/home-content';

type Props = {
  approach: HomeContent['approach'];
};

export function HomeAanpak({ approach }: Props) {
  const headline = joinHeadline(approach.headline, approach.headlineEm);

  return (
    <section id="aanpak" className="bg-pine text-pine-foreground">
      <HomeSectionContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{approach.spine}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle tone="light" className="mt-5">
                {headline}
              </SectionTitle>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-pine-hairline bg-pine-hairline sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} className="bg-pine">
              <div className="group/step relative flex h-full flex-col gap-4 p-7 transition-colors duration-500 hover:bg-[#22332a]">
                <span className="font-display text-[2.4rem] leading-none text-amber transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/step:-translate-y-0.5">
                  {step.n}
                </span>
                <h3 className="text-[20px] font-medium text-pine-foreground">
                  {step.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-pine-foreground/65">
                  {step.q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {approach.moreCta && (
          <div className="mt-12">
            <Link
              href="/aanpak"
              className="group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] text-pine-foreground/80 transition-colors hover:text-amber focus-visible:outline-none focus-visible:text-amber"
            >
              {approach.moreCta}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        )}
      </HomeSectionContainer>
    </section>
  );
}
