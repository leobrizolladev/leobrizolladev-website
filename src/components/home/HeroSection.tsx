import { Metric } from '@/core-components/metric';
import { PixelButton } from '@/core-components/pixel-button';
import { heroContent, heroMetrics } from '@/models/homepage';
import type { JSX } from 'react';

function PixelAvatar(): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-primary/30 bg-[radial-gradient(circle_at_top,_rgba(159,124,255,0.3),_rgba(10,8,32,0.6)_55%,_rgba(4,2,11,0.95))] shadow-[0_40px_120px_rgba(0,224,255,0.18)] sm:h-[26rem]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,224,255,0.15)_0%,_transparent_45%),linear-gradient(225deg,_rgba(159,124,255,0.22)_0%,_transparent_55%)]" />
      <div className="relative flex h-[78%] w-[78%] items-center justify-center rounded-[1.8rem] border border-primary/40 bg-card shadow-[var(--drop-shadow-card)]">
        <div className="absolute inset-4 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={`pixel-${index}`}
              className="rounded-md bg-primary/5 shadow-[inset_0_0_0_1px_rgba(159,124,255,0.08)]"
            />
          ))}
        </div>
        <div className="relative flex h-32 w-32 items-center justify-center rounded-xl bg-primary/20 shadow-[0_0_0_4px_rgba(159,124,255,0.35)]">
          <span className="text-5xl text-primary/90">⚡️</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection(): JSX.Element {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-32 overflow-hidden border-b border-border/60 px-4 pb-28 pt-24 sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,224,255,0.12),_transparent_45%)]" />
      <div className="absolute inset-x-0 top-10 -z-10 flex justify-center">
        <div className="h-32 w-[70%] max-w-4xl rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,_1.1fr)_0.9fr]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
              {heroContent.subtitle}
            </span>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              {heroContent.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PixelButton href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </PixelButton>
            <PixelButton
              href={heroContent.secondaryCta.href}
              size="lg"
              variant="secondary"
            >
              {heroContent.secondaryCta.label}
            </PixelButton>
          </div>
          <dl className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="sm:h-full">
                <Metric label={metric.label} value={metric.value} />
              </div>
            ))}
          </dl>
        </div>
        <PixelAvatar />
      </div>
    </section>
  );
}
