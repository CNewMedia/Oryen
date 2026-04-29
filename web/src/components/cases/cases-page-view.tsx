import { Fragment } from 'react';

import { Link } from '@/i18n/navigation';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';

import type { CasesPageCase, CasesPageContent } from '@/types/cases-page';

/** Visual-only asset URLs (bootstrap copy / paths unchanged). */
const HOF_HERO_SRC = '/images/HofvanCleve.jpg';
const WILLEMS_HERO_SRC = '/images/cases/willems-hero.webp';
const WILLEMS_SEO_PROOF_SRC = '/images/cases/willems-seo-dashboard.png';

const CASE_UI = {
  nl: {
    willemsProofCaptionAbove: 'SEO-PRESTATIES — EXTRACT DASHBOARD, 2024',
    willemsProofNote:
      'Een momentopname uit een lopende rapportage. De grafieken volgen de evolutie over zes jaar partnership.',
    industrialFooter: 'Identiteit op verzoek confidentieel.',
  },
  en: {
    willemsProofCaptionAbove: 'SEO PERFORMANCE — EXTRACT DASHBOARD, 2024',
    willemsProofNote:
      'A snapshot from an ongoing report. The charts track evolution across six years of partnership.',
    industrialFooter: "Identity withheld at the client's request.",
  },
} as const;

function resolveHeroSrc(c: CasesPageCase): string | null {
  if (c.slug === 'hof-van-cleve') return HOF_HERO_SRC;
  if (c.slug === 'willems-veranda') return WILLEMS_HERO_SRC;
  return c.imageSrc;
}

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

function toneClass(slug: string): 'cases-page-case--pine' | 'cases-page-case--cream' {
  if (slug === 'willems-veranda') return 'cases-page-case--cream';
  return 'cases-page-case--pine';
}

function spineLab(slug: string): string {
  return slug === 'willems-veranda'
    ? 'spine-label spine-label-light'
    : 'spine-label spine-label-dark';
}

type CopyTone = 'cream' | 'pine';

function catCls(t: CopyTone): string {
  return t === 'cream' ? 'cases-case-cat cases-case-cat--on-cream' : 'cases-case-cat cases-case-cat--on-pine';
}

function tagCls(t: CopyTone): string {
  return t === 'cream'
    ? 'cases-case-tagline cases-case-tagline--lg cases-case-tagline--on-cream'
    : 'cases-case-tagline cases-case-tagline--lg cases-case-tagline--on-pine';
}

function bodyCls(t: CopyTone): string {
  return t === 'cream'
    ? 'cases-case-body cases-case-body--on-cream'
    : 'cases-case-body cases-case-body--on-pine';
}

function oryenCls(t: CopyTone): string {
  return t === 'cream'
    ? 'cases-case-oryen cases-case-oryen--divider cases-case-oryen--on-cream'
    : 'cases-case-oryen cases-case-oryen--divider cases-case-oryen--on-pine';
}

function KpiMetricLabel({ label }: { label: string }) {
  const open = label.indexOf('(');
  if (open !== -1) {
    return (
      <div className="cases-kpi-label-stack">
        <span className="cases-kpi-label-line">{label.slice(0, open).trim()}</span>
        <span className="cases-kpi-label-line cases-kpi-label-line--sub">{label.slice(open).trim()}</span>
      </div>
    );
  }
  const slash = label.indexOf('/');
  if (slash > 0) {
    return (
      <div className="cases-kpi-label-stack">
        <span className="cases-kpi-label-line">{label.slice(0, slash).trim()}</span>
        <span className="cases-kpi-label-line cases-kpi-label-line--sub">{label.slice(slash).trim()}</span>
      </div>
    );
  }
  return (
    <div className="cases-kpi-label-stack">
      <span className="cases-kpi-label-line">{label}</span>
    </div>
  );
}

function KpiStage({
  c,
  tone,
}: {
  c: CasesPageCase;
  tone: CopyTone;
}) {
  return (
    <div className={`cases-kpi-stage ${tone === 'cream' ? 'cases-kpi-stage--cream' : 'cases-kpi-stage--pine'}`}>
      <div className="cases-kpi-strip" role="list">
        {c.metrics.map((m) => (
          <div key={`${c.slug}-${m.value}-${m.label}`} className="cases-kpi-item" role="listitem">
            <span className="cases-kpi-value">{m.value}</span>
            <KpiMetricLabel label={m.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Typographic anchor for industrial case — KPI values come from existing metrics (unchanged). */
function IndustrialGraphicFixed({
  c,
  locale,
}: {
  c: CasesPageCase;
  locale: string;
}) {
  const ui = locale === 'en' ? CASE_UI.en : CASE_UI.nl;
  const [m0, m1, m2] = c.metrics;
  return (
    <div className="cases-industrial-graphic">
      <svg className="cases-industrial-deco cases-industrial-deco--tr" viewBox="0 0 400 120" aria-hidden="true">
        <path
          fill="none"
          stroke="rgba(196,120,32,.28)"
          strokeWidth="1"
          d="M0 90 Q80 40 160 70 T320 55 L400 48"
        />
      </svg>
      <svg className="cases-industrial-deco cases-industrial-deco--bl" viewBox="0 0 400 120" aria-hidden="true">
        <path
          fill="none"
          stroke="rgba(242,239,232,.08)"
          strokeWidth="1"
          d="M40 20 Q120 60 200 35 T360 50"
        />
      </svg>
      <p className="cases-industrial-top-label">{c.categoryLabel}</p>
      <p className="cases-industrial-big-num">{m0?.value ?? ''}</p>
      <p className="cases-industrial-leads-cap">{m0?.label ?? ''}</p>
      <div className="cases-industrial-rule" aria-hidden="true" />
      <div className="cases-industrial-split-row">
        <span className="cases-industrial-split-cell">{m1?.value ?? ''}</span>
        <span className="cases-industrial-vbar" aria-hidden="true" />
        <span className="cases-industrial-split-cell">{m2?.value ?? ''}</span>
      </div>
      <div className="cases-industrial-split-sub">
        <span>{m1?.label ?? ''}</span>
        <span>{m2?.label ?? ''}</span>
      </div>
      <p className="cases-industrial-confidential">
        <em>{ui.industrialFooter}</em>
      </p>
    </div>
  );
}

type Props = {
  content: CasesPageContent;
  locale: string;
};

export function CasesPageView({ content, locale }: Props) {
  const { hero, cases, disclaimer } = content;
  const ui = locale === 'en' ? CASE_UI.en : CASE_UI.nl;

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
              <span className="cases-page-hero-line1">{hero.headlineBefore}</span>
              <span className="cases-page-hero-line2">
                <em className="cases-page-hero-em">{hero.headlineEm}</em>
              </span>
            </h1>
            <p className="cases-page-hero-sub reveal delay-2">{hero.sub}</p>
          </div>
        </div>
      </section>

      {cases.map((c, i) => {
        const slug = c.slug;
        const tc = toneClass(slug);
        const copyTone: CopyTone = slug === 'willems-veranda' ? 'cream' : 'pine';

        if (slug === 'industrial-b2b-b2c') {
          return (
            <section key={slug} className={`cases-page-case has-spine spine-dark ${tc}`}>
              <div className="spine-grid">
                <div className={spineLab(slug)}>
                  <span>{String(i + 1).padStart(2, '0')} — CASE</span>
                </div>
                <div className="spine-content cases-page-case-inner cases-page-case-inner--editorial">
                  <div className="cases-editorial cases-editorial--industrial">
                    <div className="cases-editorial-visual">
                      <IndustrialGraphicFixed c={c} locale={locale} />
                    </div>
                    <div className="cases-editorial-copy">
                      <p className={`${catCls(copyTone)} reveal`}>{c.categoryLabel}</p>
                      <h2 className={`${tagCls(copyTone)} reveal delay-1`}>
                        <em>{c.tagline}</em>
                      </h2>
                      <CaseBodyParagraphs text={c.situation} className={`${bodyCls(copyTone)} reveal delay-2`} />
                      <p className={`${oryenCls(copyTone)} reveal delay-2`}>
                        <em>{c.oryenLine}</em>
                      </p>
                      <CaseBodyParagraphs text={c.outcome} className={`${bodyCls(copyTone)} reveal delay-3`} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (slug === 'hof-van-cleve') {
          const heroSrc = resolveHeroSrc(c);
          return (
            <section key={slug} className={`cases-page-case has-spine spine-dark ${tc}`}>
              <div className="spine-grid">
                <div className={spineLab(slug)}>
                  <span>{String(i + 1).padStart(2, '0')} — CASE</span>
                </div>
                <div className="spine-content cases-page-case-inner cases-page-case-inner--editorial">
                  <div className="cases-editorial cases-editorial--hof">
                    <div className="cases-editorial-visual cases-editorial-visual--cover">
                      {heroSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="cases-case-img cases-case-img--cover" src={heroSrc} alt="" />
                      ) : null}
                    </div>
                    <div className="cases-editorial-copy cases-editorial-hof-intro">
                      <p className={`${catCls(copyTone)} reveal`}>{c.categoryLabel}</p>
                      <h2 className={`${tagCls(copyTone)} reveal delay-1`}>
                        <em>{c.tagline}</em>
                      </h2>
                      <CaseBodyParagraphs text={c.situation} className={`${bodyCls(copyTone)} reveal delay-2`} />
                    </div>
                    <div className="cases-editorial-hof-kpi">
                      <KpiStage c={c} tone={copyTone} />
                    </div>
                    <div className="cases-editorial-copy cases-editorial-hof-tail">
                      <p className={`${oryenCls(copyTone)} reveal delay-3`}>
                        <em>{c.oryenLine}</em>
                      </p>
                      <CaseBodyParagraphs text={c.outcome} className={`${bodyCls(copyTone)} reveal delay-3`} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (slug === 'willems-veranda') {
          const heroSrc = resolveHeroSrc(c);
          return (
            <section key={slug} className={`cases-page-case has-spine spine-light ${tc}`}>
              <div className="spine-grid">
                <div className={spineLab(slug)}>
                  <span>{String(i + 1).padStart(2, '0')} — CASE</span>
                </div>
                <div className="spine-content cases-page-case-inner cases-page-case-inner--editorial">
                  <div className="cases-editorial cases-editorial--willems">
                    <div className="cases-editorial-copy cases-editorial-willems-intro">
                      <p className={`${catCls(copyTone)} reveal`}>{c.categoryLabel}</p>
                      <h2 className={`${tagCls(copyTone)} reveal delay-1`}>
                        <em>{c.tagline}</em>
                      </h2>
                      <CaseBodyParagraphs text={c.situation} className={`${bodyCls(copyTone)} reveal delay-2`} />
                    </div>
                    <div className="cases-editorial-visual cases-editorial-willems-hero">
                      {heroSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="cases-case-img" src={heroSrc} alt="" />
                      ) : null}
                    </div>
                    <div className="cases-editorial-willems-kpi">
                      <KpiStage c={c} tone={copyTone} />
                    </div>
                    <div className="cases-editorial-willems-proof">
                      <figure className="cases-willems-proof">
                        <figcaption className="cases-willems-proof-cap">{ui.willemsProofCaptionAbove}</figcaption>
                        <div className="cases-willems-proof-frame">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={WILLEMS_SEO_PROOF_SRC} alt="" className="cases-willems-proof-img" />
                        </div>
                        <p className="cases-willems-proof-note">{ui.willemsProofNote}</p>
                      </figure>
                    </div>
                    <div className="cases-editorial-copy cases-editorial-willems-tail">
                      <p className={`${oryenCls(copyTone)} reveal delay-2`}>
                        <em>{c.oryenLine}</em>
                      </p>
                      <CaseBodyParagraphs text={c.outcome} className={`${bodyCls(copyTone)} reveal delay-3`} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        throw new Error(`Unhandled cases slug: ${slug}`);
      })}

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
