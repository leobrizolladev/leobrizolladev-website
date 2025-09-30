import type { JSX } from 'react';
import { cn } from '@/helpers/utils';

export interface TagProps {
  readonly label: string;
  readonly variant?: 'outline' | 'solid';
  readonly className?: string;
}

export function Tag({
  label,
  variant = 'outline',
  className,
}: TagProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] transition',
        variant === 'outline'
          ? 'border-primary/30 text-primary'
          : 'border-primary bg-primary/10 text-primary',
        className
      )}
    >
      {label}
    </span>
  );
}
