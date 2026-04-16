import type { ReactNode } from 'react';

/**
 * Full-viewport shell so embedded Studio is not clipped by site chrome.
 */
export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] min-h-screen overflow-hidden">{children}</div>
  );
}
