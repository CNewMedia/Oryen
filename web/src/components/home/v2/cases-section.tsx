import { Link } from '@/i18n/navigation';
import {
  getCasesFromProof,
  joinHeadline,
} from '@/components/home/v2/content-helpers';
import { Reveal } from '@/components/home/v2/reveal';
import { Eyebrow, SectionTitle } from '@/components/home/v2/section-bits';
import type { HomeContent } from '@/types/home-content';

type Props = {
  proof: HomeContent['proof'];
  seeAllCasesLabel: string;
};

export function HomeCases({ proof, seeAllCasesLabel }: Props) {
  const cases = getCasesFromProof(proof);
  const headline = joinHeadline(proof.headline, proof.headlineEm);

  return (
    <section id="cases" className="bg-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{proof.spine}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle className="mt-5">{headline}</SectionTitle>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 90} className="bg-card">
              <article className="group/card relative flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-[#fbfaf7]">
                <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-amber transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-y-100" />
                <h3 className="font-display text-[24px] font-medium text-ink">
                  {item.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/75">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-amber focus-visible:outline-none focus-visible:text-amber"
          >
            {seeAllCasesLabel}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
