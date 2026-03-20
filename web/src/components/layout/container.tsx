import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/cn';

export function Container({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-content px-6 md:px-8 lg:px-10',
        className
      )}
      {...props}
    />
  );
}
