import type { JSX } from 'react';
import { SectionHeading } from '@/core-components/section-heading';
import { aboutItems } from '@/models/homepage';

const ICONS = ['🧭', '⚙️', '🎨'] as const;

export function AboutSection(): JSX.Element {
  return (
    <section
      id="sobre"
      className="scroll-mt-32 border-b border-border/60 px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <SectionHeading
          eyebrow="Sobre"
          title="Tecnologia com propósito e estética"
          description="Acredito que produtos excelentes nascem do equilíbrio entre estratégia, engenharia e narrativa. Estes são os pilares que me guiam."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-card/80 px-6 py-8 shadow-[0_30px_60px_rgba(10,8,32,0.35)] transition motion-safe:hover:-translate-y-1 hover:border-primary/60 motion-safe:hover:shadow-[0_40px_90px_rgba(159,124,255,0.25)] motion-reduce:transform-none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {ICONS[index]}
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
