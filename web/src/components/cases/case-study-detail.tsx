import { getTranslations } from 'next-intl/server';

import { SanityRichText } from '@/components/sanity/sanity-rich-text';

import type { CaseStudyDetail } from '@/types/case-study';

type Props = { data: CaseStudyDetail; locale: string };

export async function CaseStudyDetailView({ data, locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'CaseStudy' });

  return (
    <div className="max-w-prose">
      {data.heroImageUrl ? (
        <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden bg-[var(--line)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.heroImageUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      {data.clientName || data.sector ? (
        <p className="mb-6 text-xs uppercase tracking-[0.12em] text-[var(--ink3)]">
          {[data.clientName, data.sector].filter(Boolean).join(' · ')}
        </p>
      ) : null}
      {data.summary ? (
        <p className="stelling-p mb-10 text-[var(--ink)]">{data.summary}</p>
      ) : null}

      <section className="mb-10">
        <h2 className="stelling-hl mb-4 text-lg">{t('everyoneSaw')}</h2>
        <p className="stelling-p whitespace-pre-wrap text-[var(--ink2)]">
          {data.whatEveryoneSaw ?? '—'}
        </p>
      </section>
      <section className="mb-10">
        <h2 className="stelling-hl mb-4 text-lg">{t('oryenSaw')}</h2>
        <p className="stelling-p whitespace-pre-wrap text-[var(--ink2)]">
          {data.whatOryenSaw ?? '—'}
        </p>
      </section>
      <section className="mb-10">
        <h2 className="stelling-hl mb-4 text-lg">{t('shift')}</h2>
        <p className="stelling-p whitespace-pre-wrap text-[var(--ink2)]">
          {data.strategicShift ?? '—'}
        </p>
      </section>
      <section className="mb-10">
        <h2 className="stelling-hl mb-4 text-lg">{t('impact')}</h2>
        <p className="stelling-p whitespace-pre-wrap text-[var(--ink2)]">
          {data.resultImpact ?? '—'}
        </p>
      </section>

      {data.metrics.length > 0 ? (
        <ul className="mb-10 grid gap-4 sm:grid-cols-2">
          {data.metrics.map((m, i) => (
            <li
              key={`${m.label}-${i}`}
              className="border border-[var(--line)] p-4 text-center"
            >
              {m.value ? (
                <p className="text-2xl font-medium text-[var(--ink)]">{m.value}</p>
              ) : null}
              {m.label ? (
                <p className="text-sm text-[var(--ink3)]">{m.label}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {data.quote ? (
        <blockquote className="mb-10 border-l-2 border-[var(--amber)] pl-4 italic text-[var(--ink2)]">
          {data.quote}
        </blockquote>
      ) : null}

      <SanityRichText value={data.body} />
    </div>
  );
}
