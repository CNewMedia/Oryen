import Image from 'next/image';

import { CTAButton } from '@/components/home/v2/cta-button';
import { HERO_TAGS } from '@/components/home/v2/content-helpers';
import { PriorityCard } from '@/components/home/v2/priority-card';
import { Reveal } from '@/components/home/v2/reveal';
import type { HomeContent } from '@/types/home-content';

type Props = {
  hero: HomeContent['hero'];
  heroImage: string;
  locale: string;
};

export function HomeHero({ hero, heroImage, locale }: Props) {
  const tags = HERO_TAGS[locale] ?? HERO_TAGS.nl;
  const headline = [hero.titleLine1, hero.titleLine2, hero.titleEm].filter(Boolean).join(' ');

  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-pine text-pine-foreground"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/90 to-pine/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-pine/50" />
        <div className="absolute inset-0 [background:radial-gradient(130%_130%_at_50%_42%,transparent_55%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="home-v2-section-inner home-v2-hero-inner relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pine-hairline px-3.5 py-1.5 text-[12px] uppercase tracking-[0.16em] text-pine-foreground/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.4rem,5.4vw,4.2rem)] font-normal leading-[1.08] tracking-[-0.01em] text-balance">
                {headline}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[620px] text-[17px] leading-relaxed text-pine-foreground/75">
                {hero.claim}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href="#reality-check" variant="amber">
                  {hero.primaryCta}
                </CTAButton>
                <CTAButton href="#aanpak" variant="ghost-light">
                  {hero.secondaryCta}
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={320} className="flex lg:justify-end">
              <PriorityCard locale={locale} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
