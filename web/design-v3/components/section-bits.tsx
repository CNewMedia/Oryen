import type { ReactNode } from 'react'

export function Eyebrow({
  children,
  tone = 'dark',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
}) {
  return (
    <span
      className={`text-[13px] uppercase tracking-[0.22em] ${
        tone === 'light' ? 'text-amber' : 'text-amber'
      }`}
    >
      {children}
    </span>
  )
}

export function SectionTitle({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <h2
      className={`font-display font-medium leading-[1.12] tracking-[-0.01em] text-balance text-[clamp(1.9rem,3.4vw,2.25rem)] ${
        tone === 'light' ? 'text-pine-foreground' : 'text-ink'
      } ${className}`}
    >
      {children}
    </h2>
  )
}
