import { Fragment } from 'react';

import { Link } from '@/i18n/navigation';

/** Matches `[label](/path)` in FAQ answers and article copy. */
const LINK_MARKUP = /\[([^\]]+)\]\(([^)]+)\)/g;

type LinkHref =
  | string
  | {
      pathname: '/insights/[slug]';
      params: { slug: string };
    };

function resolveHref(raw: string): LinkHref {
  const insights = raw.match(/^\/insights\/([^/]+)\/?$/);
  if (insights) {
    return { pathname: '/insights/[slug]', params: { slug: insights[1] } };
  }
  const inzichten = raw.match(/^\/inzichten\/([^/]+)\/?$/);
  if (inzichten) {
    return { pathname: '/insights/[slug]', params: { slug: inzichten[1] } };
  }
  return raw as LinkHref;
}

type Props = {
  text: string;
  className?: string;
  linkClassName?: string;
};

export function InlineLinkedText({ text, className, linkClassName }: Props) {
  const parts: Array<{ type: 'text' | 'link'; value: string; href?: string }> =
    [];
  let last = 0;
  let m: RegExpExecArray | null;

  LINK_MARKUP.lastIndex = 0;
  while ((m = LINK_MARKUP.exec(text)) !== null) {
    if (m.index > last) {
      parts.push({ type: 'text', value: text.slice(last, m.index) });
    }
    parts.push({ type: 'link', value: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    parts.push({ type: 'text', value: text.slice(last) });
  }

  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.type === 'link' && part.href ? (
          <Link
            key={`${part.href}-${i}`}
            className={linkClassName ?? 'insight-inline-link'}
            href={resolveHref(part.href) as never}
          >
            {part.value}
          </Link>
        ) : (
          <Fragment key={i}>{part.value}</Fragment>
        )
      )}
    </span>
  );
}
