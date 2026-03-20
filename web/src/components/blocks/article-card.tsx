import Link from 'next/link';

import { Card, CardMeta, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils/cn';

type ArticleCardProps = {
  href: string;
  title: string;
  dateLabel: string;
  excerpt: string;
  className?: string;
};

export function ArticleCard({
  href,
  title,
  dateLabel,
  excerpt,
  className,
}: ArticleCardProps) {
  return (
    <Link href={href} className={cn('group block h-full', className)}>
      <Card className="flex h-full flex-col p-8">
        <p className="text-label font-medium uppercase text-ink-muted">
          {dateLabel}
        </p>
        <CardTitle className="mt-4 text-2xl transition-colors group-hover:text-ink/80">
          {title}
        </CardTitle>
        <p className="mt-3 flex-1 text-body-lg text-ink-muted">{excerpt}</p>
        <CardMeta className="mt-6 font-medium text-ink">
          <span className="border-b border-transparent pb-0.5 transition-[border-color] group-hover:border-ink/40">
            [Link label]
          </span>
        </CardMeta>
      </Card>
    </Link>
  );
}
