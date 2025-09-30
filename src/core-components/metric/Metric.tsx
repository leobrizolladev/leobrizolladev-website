import type { JSX } from 'react';

export interface MetricProps {
  readonly label: string;
  readonly value: string;
}

export function Metric({ label, value }: MetricProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-primary/30 bg-card/70 px-5 py-4 text-left text-foreground shadow-[var(--drop-shadow-card)]/40 sm:h-full">
      <dt className="text-2xl font-semibold text-primary">{value}</dt>
      <dd className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </dd>
    </div>
  );
}
