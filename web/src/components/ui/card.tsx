import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/cn';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-sm border border-line/80 bg-canvas p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)]',
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('font-display text-xl font-medium tracking-tight text-ink', className)}
      {...props}
    />
  );
}

export function CardMeta({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn('mt-2 text-body-sm text-ink-muted', className)}
      {...props}
    />
  );
}
