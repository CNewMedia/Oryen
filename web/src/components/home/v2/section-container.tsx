import type { ReactNode } from 'react';

const BASE =
  'home-v2-section-inner mx-auto w-full max-w-[1200px] px-6 py-24 md:py-32';

type Props = {
  children: ReactNode;
  className?: string;
};

/** Centred 1200px content rail — matches design-v3 / v0 homepage sections. */
export function HomeSectionContainer({ children, className = '' }: Props) {
  return <div className={`${BASE}${className ? ` ${className}` : ''}`}>{children}</div>;
}
