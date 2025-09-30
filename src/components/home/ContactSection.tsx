import type { JSX } from 'react';
import { SectionHeading } from '@/core-components/section-heading';
import { PixelButton } from '@/core-components/pixel-button';
import { contactLinks } from '@/models/homepage';

export function ContactSection(): JSX.Element {
  return (
    <section
      id="contato"
      className="scroll-mt-32 px-4 pb-24 pt-16 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-primary/40 bg-secondary/60 px-8 py-16 shadow-[0_40px_80px_rgba(9,7,26,0.55)] sm:px-12">
        <div className="flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="Contato"
            title="Vamos construir algo memorável?"
            description="Me escreva sobre consultorias, freelas, talks ou colaborações. Respondo em até 24h úteis."
            align="center"
            className="max-w-2xl"
          />
          <div className="grid w-full gap-4 md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-card/70 px-6 py-6 text-center transition motion-safe:hover:-translate-y-1 hover:border-primary/70 motion-safe:hover:bg-card motion-reduce:transform-none"
              >
                <span className="text-xs uppercase tracking-[0.28em] text-primary">
                  {link.label}
                </span>
                <p className="text-sm text-muted-foreground transition group-hover:text-foreground">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
          <PixelButton href="mailto:contato@leobrizolla.dev" size="lg">
            Enviar e-mail
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
