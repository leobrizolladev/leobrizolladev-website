import type { JSX } from 'react';
import Link from 'next/link';
import { PixelButton } from '@/core-components/pixel-button';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
] as const;

export function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm sm:px-6 lg:px-10">
        <Link
          href="#inicio"
          className="font-semibold uppercase tracking-[0.4em] text-primary"
        >
          LEO·BRIZOLLA
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <PixelButton
            href="mailto:contato@leobrizolla.dev"
            size="md"
            variant="ghost"
          >
            Contato
          </PixelButton>
        </div>
      </div>
    </header>
  );
}
