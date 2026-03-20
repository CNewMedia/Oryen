import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'items-center text-center md:flex-col md:items-center',
        className
      )}
    >
      <div
        className={cn(
          'max-w-prose-wide space-y-4',
          align === 'center' && 'mx-auto'
        )}
      >
        {eyebrow ? (
          <p className="text-label font-medium uppercase text-ink-muted">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-display-lg text-ink">{title}</h2>
        {lede ? (
          <p className="max-w-prose text-body-lg text-ink-muted">{lede}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
