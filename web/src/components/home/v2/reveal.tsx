'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function enableHomeRevealAnimate(root: Element | null) {
  if (!root || root.classList.contains('home-v2--reveal-animate')) return;
  if (prefersReducedMotion()) return;
  root.classList.add('home-v2--reveal-animate');
}

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  /** Visible by default — SSR, no-JS, and failed observers stay readable */
  const [revealed, setRevealed] = useState(true);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setRevealed(true);
      setPending(false);
      return;
    }

    enableHomeRevealAnimate(node.closest('.home-v2'));

    if (isInViewport(node)) {
      setRevealed(true);
      setPending(false);
      return;
    }

    setRevealed(false);
    setPending(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            setPending(false);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as 'div';
  const classes = [
    'reveal',
    revealed ? 'is-visible visible' : '',
    pending ? 'reveal-pending' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref as never}
      className={classes}
      style={{ transitionDelay: revealed ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Component>
  );
}
