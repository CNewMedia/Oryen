'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  )

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Simulate a request; wire to a real endpoint/route handler when available.
    setTimeout(() => setStatus('success'), 700)
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius)] border border-hairline bg-secondary p-8 text-center">
        <p className="font-display text-[22px] font-medium text-ink">
          Bedankt — uw bericht is verstuurd.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
          Christophe leest mee en antwoordt binnen één werkdag.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[14px] font-medium text-ink">
          Naam
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="min-h-[48px] rounded-[var(--radius)] border border-hairline bg-card px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-amber focus:ring-2 focus:ring-amber/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[14px] font-medium text-ink">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-[48px] rounded-[var(--radius)] border border-hairline bg-card px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-amber focus:ring-2 focus:ring-amber/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className="text-[14px] font-medium text-ink">
          Wat speelt er?{' '}
          <span className="font-normal text-ink/50">(optioneel)</span>
        </label>
        <input
          id="topic"
          name="topic"
          type="text"
          className="min-h-[48px] rounded-[var(--radius)] border border-hairline bg-card px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-amber focus:ring-2 focus:ring-amber/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[14px] font-medium text-ink">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y rounded-[var(--radius)] border border-hairline bg-card px-4 py-3 text-[16px] leading-relaxed text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-amber focus:ring-2 focus:ring-amber/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[var(--radius)] bg-amber px-7 text-[15px] font-medium tracking-wide text-amber-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#b3661a] hover:shadow-[0_10px_30px_-12px_rgba(200,115,31,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Versturen…' : 'Bericht versturen'}
      </button>
    </form>
  )
}
