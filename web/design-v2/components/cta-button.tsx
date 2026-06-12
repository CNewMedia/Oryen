import type { ReactNode } from 'react'
import Link from 'next/link'

type Variant = 'amber' | 'ghost-light' | 'ghost-dark'

const base =
  'group inline-flex items-center justify-center gap-2.5 min-h-[46px] px-7 text-[14px] font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-[var(--radius)] active:translate-y-px'

const variants: Record<Variant, string> = {
  amber:
    'bg-amber text-amber-foreground hover:bg-[#b3661a] hover:shadow-[0_10px_30px_-12px_rgba(200,115,31,0.65)] hover:-translate-y-0.5 focus-visible:ring-amber focus-visible:ring-offset-background',
  'ghost-light':
    'border border-pine-hairline text-pine-foreground hover:bg-[rgba(246,245,241,0.08)] hover:border-[rgba(246,245,241,0.35)] focus-visible:ring-[rgba(246,245,241,0.6)] focus-visible:ring-offset-pine',
  'ghost-dark':
    'border border-ink/25 text-ink hover:bg-ink/5 hover:border-ink/40 focus-visible:ring-ink focus-visible:ring-offset-background',
}

export function CTAButton({
  children,
  variant = 'amber',
  href = '#',
  className = '',
  withArrow = true,
}: {
  children: ReactNode
  variant?: Variant
  href?: string
  className?: string
  withArrow?: boolean
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
        >
          <path
            d="M2 8h11M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  )
}
