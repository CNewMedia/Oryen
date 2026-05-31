type Props = {
  children: string;
};

/** Standalone editorial pull quote — one per article max. */
export function PullQuote({ children }: Props) {
  return (
    <blockquote className="insight-pull-quote">
      <p>{children}</p>
    </blockquote>
  );
}
