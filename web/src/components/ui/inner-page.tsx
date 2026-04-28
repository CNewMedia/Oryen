import type { ReactNode } from 'react';

type InnerPageProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

/** Inner pages: cream band + spine rhythm aligned with homepage system. */
export function InnerPage({ eyebrow, title, intro, children }: InnerPageProps) {
  return (
    <section className="has-spine spine-light min-h-[70vh] bg-[var(--cream)] pt-[100px] pb-24">
      <div className="spine-grid">
        <div className="spine-label spine-label-light">
          {eyebrow ? <span>{eyebrow}</span> : <span>ORYEN</span>}
        </div>
        <div className="spine-content !pt-[clamp(4rem,8vh,6rem)]">
          <h1 className="stelling-hl mb-8 max-w-[20ch]">{title}</h1>
          {intro ? (
            typeof intro === 'string' && intro.includes('\n\n') ? (
              intro
                .split(/\n\n+/)
                .map((block) => block.trim())
                .filter(Boolean)
                .map((block, i, arr) => (
                  <p
                    key={i}
                    className={`stelling-p max-w-prose text-[1.05rem] leading-relaxed text-[var(--ink)] ${
                      i < arr.length - 1 ? 'mb-6' : 'mb-12'
                    }`}
                  >
                    {block}
                  </p>
                ))
            ) : (
              <p className="stelling-p mb-12 max-w-prose text-[1.05rem] leading-relaxed text-[var(--ink)]">
                {intro}
              </p>
            )
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
