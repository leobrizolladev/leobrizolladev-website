import type { JSX } from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { SiteHeader } from './SiteHeader';
import { SchemaMarkup } from './SchemaMarkup';

export function HomePage(): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <a className="skip-link" href="#inicio">
        Pular para o conteúdo principal
      </a>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SchemaMarkup />
    </div>
  );
}
