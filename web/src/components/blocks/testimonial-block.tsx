import { cn } from '@/lib/utils/cn';

type TestimonialBlockProps = {
  quote: string;
  name: string;
  role: string;
  className?: string;
};

export function TestimonialBlock({
  quote,
  name,
  role,
  className,
}: TestimonialBlockProps) {
  return (
    <figure
      className={cn(
        'relative border-l-2 border-accent pl-8 md:pl-10',
        className
      )}
    >
      <blockquote className="font-display text-2xl font-normal leading-snug text-ink md:text-3xl">
        {quote}
      </blockquote>
      <figcaption className="mt-8 text-body-sm">
        <span className="font-medium text-ink">{name}</span>
        <span className="mt-1 block text-ink-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
