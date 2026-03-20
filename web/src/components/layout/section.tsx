import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/cn';

const variants = {
  default: 'bg-canvas',
  muted: 'bg-canvas-muted',
  ink: 'bg-ink text-canvas',
} as const;

type SectionProps = ComponentProps<'section'> & {
  variant?: keyof typeof variants;
};

export function Section({
  className,
  variant = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-18 md:py-22 lg:py-30',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
