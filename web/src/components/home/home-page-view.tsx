import { Fragment } from 'react';

import { Link } from '@/i18n/navigation';

import type { HomeContent } from '@/types/home-content';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';

import { HomeBrandArchitecture } from './home-brand-blocks';

const SOLUTIONS_URL = 'https://oryen.solutions';

const CASE_TAGS: Record<string, { nl: string; en: string }> = {
  'Hof van Cleve': { nl: 'richting', en: 'direction' },
  'Willems Veranda': { nl: 'digitale aansluiting', en: 'digital connection' },
  'Concordia Textiles': { nl: 'interne afstemming', en: 'internal alignment' },
  'BMW — lokale dealer': { nl: 'lokaal onderscheid', en: 'local distinction' },
  'BMW — local dealer': { nl: 'lokaal onderscheid', en: 'local distinction' },
};

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
      <p className="os-product-note">
        <RichBrLines text={text} />
      </p>
    );
  }
  const before = text.slice(0, idx);
  const after = text.slice(idx + marker.length);
  return (
    <p className="os-product-note">
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

function ScorecardMotif({ locale }: { locale: string }) {
  const isNl = locale === 'nl';
  const labels = isNl ? ['Nu', 'Straks', 'Niet nu'] : ['Now', 'Later', 'Not now'];

  return (
    <aside className="os-scorecard reveal delay-2" aria-hidden="true">
      <p className="os-scorecard-title">{isNl ? 'Prioriteit' : 'Priority'}</p>
      {labels.map((label, i) => (
        <div key={label} className="os-scorecard-row">
          <span
            className={`os-scorecard-priority${
              i === 1 ? ' os-scorecard-priority--later' : i === 2 ? ' os-scorecard-priority--not' : ''
            }`}
          >
            {label}
          </span>
          <span className="os-scorecard-line" />
        </div>
      ))}
    </aside>
  );
}

type Props = {
  home: HomeContent;
  brandTagline: string;
  seeAllCasesLabel: string;
  locale: string;
};

export function HomePageView({ home: t, brandTagline, seeAllCasesLabel, locale }: Props) {
  const steps = t.approach.steps;
  const minis = t.proof.minis;
  const isNl = locale === 'nl';
  const offerLabel = t.offer.spine.includes('—')
    ? t.offer.spine.split('—').pop()?.trim() ?? t.offer.spine
    : t.offer.spine;

  const proofCases = [
    { client: t.proof.featured.client, text: t.proof.featured.title },
    ...minis.map((m) => ({
      client: m.client,
      text: m.subtitle || m.body,
    })),
  ];

  return (
    <div className="os-page">
      <section className="os-section os-hero" aria-labelledby="home-hero-hl">
        <div className="os-container">
          <div className="os-hero-grid">
            <div>
              <p className="os-eyebrow reveal">{brandTagline}</p>
              <h1 className="os-display reveal delay-1" id="home-hero-hl">
                {t.hero.titleLine1}
              </h1>
              {t.hero.claim?.trim() ? (
                <RichBlocks text={t.hero.claim} className="os-lead reveal delay-2" />
              ) : null}
              <div className="os-actions reveal delay-3">
                <Link className="os-btn-primary btn-primary" href="/aanbod" locale={locale}>
                  <span>
                    <PrimaryRcCtaLabel locale={locale} label={t.hero.primaryCta} />
                  </span>
                  <span className="btn-arrow" />
                </Link>
                <Link className="os-btn-secondary btn-ghost" href="/aanpak" locale={locale}>
                  {t.hero.secondaryCta}
                </Link>
              </div>
            </div>
            <ScorecardMotif locale={locale} />
          </div>
        </div>
      </section>

      <section className="os-section" aria-labelledby="home-recognition-hl">
        <div className="os-container">
          <div className="os-section-head">
            <h2 className="os-h2 reveal" id="home-recognition-hl">
              {t.recognition.headline}
            </h2>
            <RichBlocks text={t.recognition.body} className="os-body reveal delay-1" />
            <div className="os-actions reveal delay-2">
              <Link className="os-btn-primary btn-primary" href="/aanbod" locale={locale}>
                <span>
                  <PrimaryRcCtaLabel locale={locale} label={t.recognition.cta} />
                </span>
                <span className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="os-section" aria-labelledby="home-diagnosis-hl">
        <div className="os-container">
          <div className="os-section-head">
            <p className="os-eyebrow reveal">{t.diagnosis.spine}</p>
            <h2 className="os-h2 reveal delay-1" id="home-diagnosis-hl">
              <em
                dangerouslySetInnerHTML={{
                  __html: t.diagnosis.headlineEm.replace(/\n/g, '<br />'),
                }}
              />
            </h2>
            <p className="os-body reveal delay-2">
              <RichBrLines text={t.diagnosis.p1} />
            </p>
          </div>
        </div>
      </section>

      <section className="os-section os-section--forest" id="how" aria-labelledby="home-approach-hl">
        <div className="os-container">
          <div className="os-steps-head">
            <p className="os-eyebrow reveal">{t.approach.spine}</p>
            <h2 className="os-h2 reveal delay-1" id="home-approach-hl">
              {t.approach.headline}
              <br />
              <em>{t.approach.headlineEm}</em>
            </h2>
          </div>
          <div className="os-steps-grid">
            {steps.map((step, i) => (
              <div key={step.n} className={`os-step-card reveal delay-${Math.min(i + 1, 3)}`}>
                <span className="os-step-num">
                  {t.approach.stepPrefix} {step.n}
                </span>
                <span className="os-step-name">{step.name}</span>
                <p className="os-step-q">
                  <RichBrLines text={step.q} />
                </p>
              </div>
            ))}
          </div>
          {t.approach.moreCta ? (
            <div className="os-proof-footer reveal delay-2">
              <Link className="os-link os-link-arrow" href="/aanpak" locale={locale}>
                {t.approach.moreCta}
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="os-section" aria-labelledby="home-proof-hl">
        <div className="os-container">
          <div className="os-section-head">
            <p className="os-eyebrow reveal">{t.proof.spine}</p>
            <h2 className="os-h2 reveal delay-1" id="home-proof-hl">
              {t.proof.headline}
              <br />
              <em>{t.proof.headlineEm}</em>
            </h2>
          </div>
          <div className="os-proof-grid">
            {proofCases.map((item, i) => {
              const tag = CASE_TAGS[item.client];
              return (
                <article
                  key={item.client}
                  className={`os-proof-card reveal ${i > 0 ? `delay-${Math.min(i, 3)}` : ''}`}
                >
                  {tag ? (
                    <p className="os-proof-tag">{isNl ? tag.nl : tag.en}</p>
                  ) : null}
                  <h3 className="os-proof-client">{item.client}</h3>
                  <p className="os-proof-text">
                    <RichBrLines text={item.text} />
                  </p>
                </article>
              );
            })}
          </div>
          <div className="os-proof-footer reveal delay-2">
            <Link className="os-link os-link-arrow" href="/cases" locale={locale}>
              {seeAllCasesLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="os-section os-section--forest" aria-labelledby="home-offer-hl">
        <div className="os-container">
          <div className="os-product-card">
            <p className="os-product-label">{offerLabel}</p>
            <h2 className="os-product-title reveal" id="home-offer-hl">
              {t.offer.name}
            </h2>
            <RichBlocks text={t.offer.body} className="os-body reveal delay-1" />
            {t.offer.price?.trim() ? (
              <p className="os-product-price reveal delay-2">{t.offer.price}</p>
            ) : null}
            {t.offer.deliverables?.length ? (
              <ul className="os-product-list reveal delay-2">
                {t.offer.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <Link
              className="os-btn-primary btn-primary offer-btn reveal delay-3"
              href="/aanbod"
              locale={locale}
            >
              <span>
                <PrimaryRcCtaLabel locale={locale} label={t.offer.ctaPrimary} />
              </span>
              <span className="btn-arrow" />
            </Link>
            {t.offer.secondaryNote?.trim() ? (
              <p className="os-product-note reveal delay-3">
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
      </section>

      <section className="os-section" aria-labelledby="home-insights-hl">
        <div className="os-container">
          <div className="os-section-head">
            <p className="os-eyebrow reveal">{t.insights.spine}</p>
            <h2 className="os-h2 reveal delay-1" id="home-insights-hl">
              {t.insights.headline}
            </h2>
            {t.insights.intro?.trim() ? (
              <p className="os-body reveal delay-2">
                <RichBrLines text={t.insights.intro} />
              </p>
            ) : null}
            <Link className="os-link os-link-arrow reveal delay-3" href="/insights" locale={locale}>
              {t.insights.cta}
            </Link>
          </div>
        </div>
      </section>

      <HomeBrandArchitecture locale={locale} />
    </div>
  );
}
