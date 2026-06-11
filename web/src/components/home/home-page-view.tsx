import { Fragment } from 'react';

import { Link } from '@/i18n/navigation';

import type { HomeContent } from '@/types/home-content';
import type { HomeImageUrls } from '@/lib/sanity/load-homepage';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';

import { HomeBrandArchitecture } from './home-brand-blocks';

import { DiagLine } from './diag-line';

const SOLUTIONS_URL = 'https://oryen.solutions';

/** Subtle case-type labels (design metadata — not body copy). */
const CASE_TAGS: Record<string, { nl: string; en: string }> = {
  'Hof van Cleve': { nl: 'richting', en: 'direction' },
  'Willems Veranda': { nl: 'digitale aansluiting', en: 'digital connection' },
  'Concordia Textiles': { nl: 'interne afstemming', en: 'internal alignment' },
  'BMW — lokale dealer': { nl: 'lokaal onderscheid', en: 'local distinction' },
  'BMW — local dealer': { nl: 'lokaal onderscheid', en: 'local distinction' },
};

/** Split op `<br/>` of newline in copy en render echte `<br />`. */
function RichBrLines({ text }: { text: string }) {
  const normalized = text.replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  const parts = normalized.split(/<br\s*\/?>|\r?\n/i);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}

/** Blokken gescheiden door lege regels (\n\n); binnen een blok: echte regeleinden. */
function RichBlocks({
  text,
  className,
  revealDelay,
}: {
  text: string;
  className: string;
  revealDelay?: string;
}) {
  const blocks = text
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => (
        <p
          key={i}
          className={`${className}${revealDelay ? ` reveal ${revealDelay}` : ''}`}
        >
          <RichBrLines text={block} />
        </p>
      ))}
    </>
  );
}

function SolutionsNote({ text }: { text: string }) {
  const marker = 'ORYEN Solutions';
  const idx = text.indexOf(marker);
  if (idx === -1) {
    return (
      <p className="offer-solutions-note">
        <RichBrLines text={text} />
      </p>
    );
  }
  const before = text.slice(0, idx);
  const after = text.slice(idx + marker.length);
  return (
    <p className="offer-solutions-note">
      <RichBrLines text={before} />
      <a
        className="offer-solutions-link"
        href={SOLUTIONS_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        ORYEN Solutions
      </a>
      <RichBrLines text={after} />
    </p>
  );
}

type Props = {
  home: HomeContent;
  images: HomeImageUrls;
  contactEmail: string;
  seeAllCasesLabel: string;
  locale: string;
};

export function HomePageView({
  home,
  images,
  contactEmail: _contactEmail,
  seeAllCasesLabel,
  locale,
}: Props) {
  const t = home;
  const steps = t.approach.steps;
  const minis = t.proof.minis;
  const isNl = locale === 'nl';
  const offerLabel = t.offer.spine.includes('—')
    ? t.offer.spine.split('—').pop()?.trim() ?? t.offer.spine
    : t.offer.spine;

  const proofCases = [
    {
      num: '01',
      client: t.proof.featured.client,
      text: t.proof.featured.title,
    },
    ...minis.map((m, i) => ({
      num: String(i + 2).padStart(2, '0'),
      client: m.client,
      text: m.subtitle || m.body,
    })),
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img id="heroImg" src={images.hero} alt="" />
        </div>
        <div className="hero-spine" id="heroSpine" />
        <div className="hero-body">
          <div className="hero-spacer" />
          <div className="hero-text">
            <h1 className="hero-hl reveal">
              <span>
                {t.hero.titleLine1}
                {t.hero.titleLine2 ? (
                  <>
                    <br />
                    {t.hero.titleLine2}
                  </>
                ) : null}
              </span>
              {t.hero.titleEm?.trim() ? (
                <em
                  dangerouslySetInnerHTML={{
                    __html: t.hero.titleEm.replace(/\n/g, '<br />'),
                  }}
                />
              ) : null}
            </h1>
            {t.hero.claim?.trim() ? (
              <RichBlocks text={t.hero.claim} className="hero-claim" revealDelay="delay-1" />
            ) : null}
            {t.hero.sub?.trim() ? (
              <RichBlocks text={t.hero.sub} className="hero-sub" revealDelay="delay-2" />
            ) : null}
            <div className="hero-actions reveal delay-3">
              <Link className="btn-primary" href="/aanbod" locale={locale}>
                <span>
                  <PrimaryRcCtaLabel locale={locale} label={t.hero.primaryCta} />
                </span>
                <span className="btn-arrow" />
              </Link>
              <Link className="btn-ghost" href="/aanpak" locale={locale}>
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-recognition has-spine spine-light" aria-labelledby="home-recognition-hl">
        <div className="spine-grid">
          <div className="spine-label spine-label-light" aria-hidden="true">
            <span />
          </div>
          <div className="spine-content home-recognition-content">
            <h2 className="recognition-hl reveal" id="home-recognition-hl">
              {t.recognition.headline}
            </h2>
            <RichBlocks text={t.recognition.body} className="stelling-p recognition-body reveal delay-1" />
            <Link className="btn-primary home-recognition-cta reveal delay-2" href="/aanbod" locale={locale}>
              <span>
                <PrimaryRcCtaLabel locale={locale} label={t.recognition.cta} />
              </span>
              <span className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="s-stelling has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.diagnosis.spine}</span>
          </div>
          <div className="spine-content">
            <h2 className="stelling-hl reveal delay-1">
              <em
                dangerouslySetInnerHTML={{
                  __html: t.diagnosis.headlineEm.replace(/\n/g, '<br />'),
                }}
              />
            </h2>
            <DiagLine className="diag-line reveal delay-1" />
            <div className="stelling-grid">
              <div className="reveal delay-2">
                <p className="stelling-p">
                  <RichBrLines text={t.diagnosis.p1} />
                </p>
                {t.diagnosis.focus?.trim() ? (
                  <p className="stelling-focus">{t.diagnosis.focus}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-aanpak has-spine spine-dark" id="how">
        <div className="spine-grid aanpak-head-wrap">
          <div className="spine-label spine-label-dark">
            <span>{t.approach.spine}</span>
          </div>
          <div className="spine-content aanpak-head">
            <h2 className="aanpak-hl reveal">
              {t.approach.headline}
              <br />
              <em>{t.approach.headlineEm}</em>
            </h2>
            {t.approach.note1?.trim() ? (
              <p className="aanpak-note reveal delay-1">
                <RichBrLines text={t.approach.note1} />
              </p>
            ) : null}
            {t.approach.introHl ? (
              <p className="aanpak-intro-hl reveal delay-2">{t.approach.introHl}</p>
            ) : null}
          </div>
        </div>
        <div className="aanpak-steps">
          <div className="aanpak-spacer" />
          {steps.map((step, i) => (
            <div key={step.n} className={`step reveal ${i > 0 ? `delay-${Math.min(i, 3)}` : ''}`}>
              <span className="step-n">
                {t.approach.stepPrefix} {step.n}
              </span>
              <span className="step-name">{step.name}</span>
              <p className="step-q">
                <RichBrLines text={step.q} />
              </p>
            </div>
          ))}
        </div>
        {t.approach.moreCta ? (
          <div className="spine-grid">
            <div className="spine-label spine-label-dark" aria-hidden="true">
              <span />
            </div>
            <div className="spine-content aanpak-more">
              <Link className="section-more section-more-dark reveal" href="/aanpak" locale={locale}>
                <span>{t.approach.moreCta}</span>
                <span className="section-more-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ) : null}
      </section>

      <section className="s-bewijs has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.proof.spine}</span>
          </div>
          <div className="spine-content" style={{ paddingBottom: 'clamp(5vh,7vh,64px)' }}>
            <h2 className="bewijs-hl reveal">
              {t.proof.headline}
              <br />
              <em>{t.proof.headlineEm}</em>
            </h2>
          </div>
        </div>
        <div className="proof-grid">
          {proofCases.map((item, i) => {
            const tag = CASE_TAGS[item.client];
            return (
              <article
                key={item.client}
                className={`proof-card reveal ${i > 0 ? `delay-${Math.min(i, 3)}` : ''}`}
              >
                <span className="proof-card-num" aria-hidden="true">
                  {item.num}
                </span>
                {tag ? (
                  <p className="proof-card-tag">{isNl ? tag.nl : tag.en}</p>
                ) : null}
                <p className="proof-card-client">{item.client}</p>
                <p className="proof-card-text">
                  <RichBrLines text={item.text} />
                </p>
              </article>
            );
          })}
        </div>
        <div className="spine-grid">
          <div className="spine-label spine-label-light" aria-hidden="true">
            <span />
          </div>
          <div className="spine-content bewijs-footer">
            <Link className="section-more reveal" href="/cases" locale={locale}>
              <span>{seeAllCasesLabel}</span>
              <span className="section-more-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="s-offer has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{t.offer.spine}</span>
          </div>
          <div className="spine-content">
            <div className="offer-main offer-main--expanded">
              <div className="offer-panel">
                <p className="offer-panel-eyebrow">{offerLabel}</p>
                <h2 className="offer-name reveal">{t.offer.name}</h2>
                <RichBlocks text={t.offer.body} className="offer-body reveal delay-1" />
                {t.offer.price?.trim() ? (
                  <p className="offer-price reveal delay-2">{t.offer.price}</p>
                ) : null}
                {t.offer.deliverables?.length ? (
                  <ul className="offer-deliverables reveal delay-2">
                    {t.offer.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <Link className="btn-primary offer-btn reveal delay-3" href="/aanbod" locale={locale}>
                  <span>
                    <PrimaryRcCtaLabel locale={locale} label={t.offer.ctaPrimary} />
                  </span>
                  <span className="btn-arrow" />
                </Link>
                {t.offer.secondaryNote?.trim() ? (
                  <p className="offer-note reveal delay-3">
                    <RichBrLines text={t.offer.secondaryNote} />
                  </p>
                ) : null}
                {t.offer.solutionsNote?.trim() ? (
                  <div className="reveal delay-3">
                    <SolutionsNote text={t.offer.solutionsNote} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-home-insights has-spine spine-light" aria-labelledby="home-insights-hl">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{t.insights.spine}</span>
          </div>
          <div className="spine-content home-insights-content">
            <h2 className="home-insights-hl reveal" id="home-insights-hl">
              {t.insights.headline}
            </h2>
            {t.insights.intro?.trim() ? (
              <p className="stelling-p home-insights-intro reveal delay-1">
                <RichBrLines text={t.insights.intro} />
              </p>
            ) : null}
            <Link className="section-more reveal delay-2" href="/insights" locale={locale}>
              <span>{t.insights.cta}</span>
              <span className="section-more-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <HomeBrandArchitecture locale={locale} />
    </>
  );
}
