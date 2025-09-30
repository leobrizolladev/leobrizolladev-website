import type { JSX } from 'react';
import { cn } from '@/helpers/utils';

export interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
  readonly align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps): JSX.Element {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header
      className={cn(
        'flex flex-col gap-3 tracking-tight text-foreground',
        alignment,
        className
      )}
    >
      <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
