import type { ReactNode } from 'react';

import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils/cn';

type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  supporting?: string;
  actions: ReactNode;
  variant?: 'default' | 'ink';
  className?: string;
};

export function CtaBlock({
  eyebrow,
  title,
  supporting,
  actions,
  variant = 'default',
  className,
}: CtaBlockProps) {
  const isInk = variant === 'ink';

  return (
    <div
      className={cn(
        'rounded-sm border border-line/80 p-10 md:p-14 lg:p-16',
        isInk ? 'border-transparent bg-ink text-canvas' : 'bg-canvas-muted',
        className
      )}
    >
      <Container className="flex max-w-prose-wide flex-col gap-8">
        <div className="space-y-4">
          {eyebrow ? (
            <p
              className={cn(
                'text-label font-medium uppercase',
                isInk ? 'text-canvas/70' : 'text-ink-muted'
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-display-lg">{title}</h2>
          {supporting ? (
            <p
              className={cn(
                'max-w-prose text-body-lg',
                isInk ? 'text-canvas/85' : 'text-ink-muted'
              )}
            >
              {supporting}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">{actions}</div>
      </Container>
    </div>
  );
}
