import { Fragment } from 'react';

import { Link } from '@/i18n/navigation';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';

import type { CasesPageCase, CasesPageContent } from '@/types/cases-page';

function RichBrLines({ text }: { text: string }) {
  const lines = text.split(/\n/);
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}

function CaseBodyParagraphs({ text, className }: { text: string; className: string }) {
  const blocks = text
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => (
        <p key={i} className={className}>
          <RichBrLines text={block} />
        </p>
      ))}
    </>
  );
}

function CaseVisual({ c }: { c: CasesPageCase }) {
  if (c.displayMode === 'typographic') {
    return (
      <div className="cases-case-type-visual" aria-hidden="true">
        <svg className="cases-case-type-wave" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path
            fill="none"
            stroke="rgba(196,120,32,.35)"
            strokeWidth="1.2"
            d="M0 120 Q200 40 400 100 T800 80"
          />
          <path
            fill="none"
            stroke="rgba(242,239,232,.12)"
            strokeWidth="1"
            d="M0 150 Q250 90 500 130 T800 110"
          />
        </svg>
        <div className="cases-case-type-visual-inner">
          <p className="cases-case-type-mark">{c.title}</p>
          <p className="cases-case-type-sub">{c.categoryLabel}</p>
        </div>
      </div>
    );
  }

  if (c.videoSrc && c.imageSrc) {
    return (
      <div className="cases-case-media">
        <video
          className="cases-case-video"
          controls
          playsInline
          preload="metadata"
          poster={c.imageSrc}
        >
          <source src={c.videoSrc} />
        </video>
      </div>
    );
  }

  if (c.imageSrc) {
    return (
      <div className="cases-case-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cases-case-img" src={c.imageSrc} alt="" />
      </div>
    );
  }

  return null;
}

type Props = {
  content: CasesPageContent;
  locale: string;
};

export function CasesPageView({ content, locale }: Props) {
  const { hero, cases, disclaimer } = content;

  return (
    <div className="cases-page">
      <section className="cases-page-hero has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{hero.spine}</span>
          </div>
          <div className="spine-content cases-page-hero-inner">
            <p className="cases-page-hero-eyebrow reveal">{hero.eyebrow}</p>
            <h1 className="cases-page-hero-hl stelling-hl reveal delay-1">
              <span>{hero.headlineBefore}</span>{' '}
              <em className="cases-page-hero-em">{hero.headlineEm}</em>
            </h1>
            <p className="cases-page-hero-sub reveal delay-2">{hero.sub}</p>
          </div>
        </div>
      </section>

      {cases.map((c, i) => (
        <section
          key={c.slug}
          className={`cases-page-case has-spine ${i % 2 === 0 ? 'spine-light cases-page-case--cream' : 'spine-dark cases-page-case--pine'}`}
        >
          <div className="spine-grid">
            <div
              className={
                i % 2 === 0 ? 'spine-label spine-label-light' : 'spine-label spine-label-dark'
              }
            >
              <span>{String(i + 1).padStart(2, '0')} — CASE</span>
            </div>
            <div className="spine-content cases-page-case-inner">
              <CaseVisual c={c} />

              <p
                className={
                  i % 2 === 0
                    ? 'cases-case-cat cases-case-cat--on-cream reveal'
                    : 'cases-case-cat cases-case-cat--on-pine reveal'
                }
              >
                {c.categoryLabel}
              </p>
              <h2
                className={
                  i % 2 === 0
                    ? 'cases-case-tagline cases-case-tagline--on-cream reveal delay-1'
                    : 'cases-case-tagline cases-case-tagline--on-pine reveal delay-1'
                }
              >
                <em>{c.tagline}</em>
              </h2>

              <CaseBodyParagraphs
                text={c.situation}
                className={
                  i % 2 === 0
                    ? 'cases-case-body cases-case-body--on-cream reveal delay-2'
                    : 'cases-case-body cases-case-body--on-pine reveal delay-2'
                }
              />

              <ul className="cases-kpi-strip reveal delay-2">
                {c.metrics.map((m) => (
                  <li key={`${c.slug}-${m.value}-${m.label}`} className="cases-kpi-item">
                    <span className="cases-kpi-value">{m.value}</span>
                    <span className="cases-kpi-label">{m.label}</span>
                  </li>
                ))}
              </ul>

              <p
                className={
                  i % 2 === 0
                    ? 'cases-case-oryen cases-case-oryen--on-cream reveal delay-3'
                    : 'cases-case-oryen cases-case-oryen--on-pine reveal delay-3'
                }
              >
                <em>{c.oryenLine}</em>
              </p>

              <CaseBodyParagraphs
                text={c.outcome}
                className={
                  i % 2 === 0
                    ? 'cases-case-body cases-case-body--on-cream reveal delay-3'
                    : 'cases-case-body cases-case-body--on-pine reveal delay-3'
                }
              />
            </div>
          </div>
        </section>
      ))}

      <section className="cases-page-disclaimer has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{disclaimer.eyebrow}</span>
          </div>
          <div className="spine-content cases-page-disclaimer-inner">
            <p className="cases-page-disclaimer-body reveal">{disclaimer.body}</p>
            <Link href="/aanbod" className="btn-primary cases-page-disclaimer-cta reveal delay-1">
              <span>
                <PrimaryRcCtaLabel locale={locale} label={disclaimer.ctaLabel} />
              </span>
              <span className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
