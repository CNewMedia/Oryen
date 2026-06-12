import { HomeAanpak } from '@/components/home/v2/aanpak-section';
import { HomeArchitecture } from '@/components/home/v2/architecture-section';
import { HomeCases } from '@/components/home/v2/cases-section';
import { HomeDiagnose } from '@/components/home/v2/diagnose';
import { HomeHero } from '@/components/home/v2/hero';
import { HomeInsightsTeaser } from '@/components/home/v2/insights-teaser';
import { HomeIntro } from '@/components/home/v2/intro';
import { HomeRealityCheck } from '@/components/home/v2/reality-check-section';
import type { HomeContent } from '@/types/home-content';

type Props = {
  home: HomeContent;
  heroImage: string;
  locale: string;
  seeAllCasesLabel: string;
};

export function HomePageView({
  home,
  heroImage,
  locale,
  seeAllCasesLabel,
}: Props) {
  return (
    <div className="home-v2">
      <HomeHero hero={home.hero} heroImage={heroImage} locale={locale} />
      <HomeIntro recognition={home.recognition} />
      <HomeDiagnose diagnosis={home.diagnosis} />
      <HomeAanpak approach={home.approach} />
      <HomeCases proof={home.proof} seeAllCasesLabel={seeAllCasesLabel} />
      <HomeRealityCheck offer={home.offer} locale={locale} />
      <HomeInsightsTeaser insights={home.insights} />
      <HomeArchitecture locale={locale} />
    </div>
  );
}
