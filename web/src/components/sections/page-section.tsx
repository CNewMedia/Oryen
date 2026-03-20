import type { ReactNode } from 'react';

type PageSectionProps = {
  id?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Section primitive for page composition and future CMS section mapping.
 */
export function PageSection({ id, children, className }: PageSectionProps) {
  return (
    <section
      id={id}
      className={['py-12', className].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  );
}
