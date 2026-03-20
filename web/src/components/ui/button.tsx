import { forwardRef } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/cn';

const variants = {
  primary:
    'bg-ink text-canvas hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/30',
  secondary:
    'border border-line bg-transparent text-ink hover:bg-canvas-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/20',
  ghost:
    'text-ink hover:bg-canvas-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/15',
} as const;

const sizes = {
  sm: 'h-9 px-4 text-body-sm',
  md: 'h-11 px-6 text-body-sm',
  lg: 'h-12 px-8 text-body-lg',
} as const;

export type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = 'primary', size = 'md', type = 'button', ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
