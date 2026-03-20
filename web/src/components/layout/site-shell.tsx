import type { ReactNode } from 'react';

/**
 * App shell wrapper — header/footer land here in phase 2+.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}
