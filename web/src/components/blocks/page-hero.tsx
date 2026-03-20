import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  className,
}: PageHeroProps) {
  return (
    <div className={cn('max-w-prose-wide space-y-8', className)}>
      {eyebrow ? (
        <p className="text-label font-medium uppercase text-ink-muted">{eyebrow}</p>
      ) : null}
      <div className="font-display text-display-xl text-ink">{title}</div>
      {lede ? (
        <div className="max-w-prose text-body-lg leading-relaxed text-ink-muted">
          {lede}
        </div>
      ) : null}
      {actions ? (
        <div className="flex flex-wrap gap-3 pt-2">{actions}</div>
      ) : null}
    </div>
  );
}
