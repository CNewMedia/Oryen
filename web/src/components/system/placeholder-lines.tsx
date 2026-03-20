import { cn } from '@/lib/utils/cn';

type PlaceholderLinesProps = {
  /** Approximate number of text lines to suggest. */
  lines?: number;
  className?: string;
  /** Accessible description for screen readers. */
  label?: string;
};

/**
 * Visual stand-in for body copy — communicates length without marketing text.
 */
export function PlaceholderLines({
  lines = 3,
  className,
  label = 'Placeholder for body copy',
}: PlaceholderLinesProps) {
  return (
    <div
      className={cn('space-y-2.5', className)}
      role="img"
      aria-label={label}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-2.5 rounded-full bg-line/80"
          style={{ width: `${Math.max(38, 96 - i * 14)}%` }}
        />
      ))}
    </div>
  );
}
