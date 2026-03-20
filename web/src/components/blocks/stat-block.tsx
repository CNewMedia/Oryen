import { cn } from '@/lib/utils/cn';

type StatBlockProps = {
  label: string;
  value: string;
  description?: string;
  className?: string;
};

export function StatBlock({
  label,
  value,
  description,
  className,
}: StatBlockProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <p className="text-label font-medium uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </p>
      <p className="font-display text-4xl font-medium tabular-nums text-ink md:text-5xl">
        {value}
      </p>
      {description ? (
        <p className="max-w-xs text-body-sm text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
