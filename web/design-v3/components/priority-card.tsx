'use client'

import { useEffect, useRef, useState } from 'react'

type Status = 'nu' | 'straks' | 'niet'

const rows: { label: string; status: Status; fill: number }[] = [
  { label: 'NU', status: 'nu', fill: 100 },
  { label: 'STRAKS', status: 'straks', fill: 55 },
  { label: 'NIET NU', status: 'niet', fill: 22 },
]

export function PriorityCard({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? 'is-visible' : ''} group w-full max-w-[340px] overflow-hidden rounded-[var(--radius)] border border-pine-hairline bg-[rgba(246,245,241,0.04)] p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors duration-500 hover:border-[rgba(246,245,241,0.22)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-pine-hairline pb-4">
        <span className="text-[13px] uppercase tracking-[0.18em] text-pine-foreground/70">
          Prioriteit
        </span>
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
        </span>
      </div>

      <ul className="mt-6 flex flex-col gap-5">
        {rows.map((row, i) => (
          <li key={row.label} className="flex flex-col gap-2.5">
            <div className="flex items-baseline justify-between">
              <span
                className={`text-[13px] uppercase tracking-[0.16em] ${
                  row.status === 'nu' ? 'text-amber' : 'text-pine-foreground/60'
                }`}
              >
                {row.label}
              </span>
              {row.status === 'nu' && (
                <span className="text-[11px] uppercase tracking-[0.16em] text-amber/80">
                  Actief
                </span>
              )}
            </div>
            <div className="h-px w-full bg-pine-hairline">
              <div
                className={`fill-bar h-px ${
                  row.status === 'nu'
                    ? 'bg-amber shadow-[0_0_8px_rgba(200,115,31,0.7)]'
                    : 'bg-pine-foreground/30'
                }`}
                style={{
                  width: `${row.fill}%`,
                  transitionDelay: `${200 + i * 140}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[13px] leading-relaxed text-pine-foreground/55">
        Niet alles tegelijk. Eerst wat nu echt verschil maakt.
      </p>
    </div>
  )
}
