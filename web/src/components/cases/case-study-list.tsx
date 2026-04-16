import { Link } from '@/i18n/navigation';

import type { CaseStudyListItem } from '@/types/case-study';

type Props = {
  cases: CaseStudyListItem[];
  emptyLabel: string;
};

export function CaseStudyList({ cases, emptyLabel }: Props) {
  if (cases.length === 0) {
    return <p className="stelling-p text-[var(--ink2)]">{emptyLabel}</p>;
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {cases.map((c) => (
        <li key={c._id}>
          <article className="group flex h-full flex-col border border-[var(--line)] bg-[var(--cream)]/60 p-6 transition hover:border-[var(--ink3)]">
            {c.heroImageUrl ? (
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden bg-[var(--line)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.heroImageUrl}
                  alt=""
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
            ) : null}
            {c.clientName ? (
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[var(--ink3)]">
                {c.clientName}
                {c.sector ? ` · ${c.sector}` : ''}
              </p>
            ) : null}
            <h2 className="stelling-hl mb-3 text-xl !leading-snug">
              <Link
                className="hover:text-[var(--ink2)]"
                href={`/cases/${c.slug}` as never}
              >
                {c.title}
              </Link>
            </h2>
            {c.summary ? (
              <p className="stelling-p flex-1 text-[var(--ink2)]">{c.summary}</p>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
