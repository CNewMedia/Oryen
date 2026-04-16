'use client';

import { PortableText, type PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="stelling-p mb-4 text-[var(--ink)]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="stelling-hl mt-12 mb-4 max-w-[24ch] text-2xl text-[var(--ink)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-medium text-[var(--ink)]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-[var(--amber)] pl-4 italic text-[var(--ink2)]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-[var(--ink)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-[var(--ink)]">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-[var(--ink)] underline underline-offset-2"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

type Props = { value: unknown[] | null };

export function SanityRichText({ value }: Props) {
  if (!value || !Array.isArray(value) || value.length === 0) return null;
  return (
    <div className="max-w-prose">
      <PortableText value={value as never} components={components} />
    </div>
  );
}
