import type { JSX } from 'react';
import { SectionHeading } from '@/core-components/section-heading';
import { Tag } from '@/core-components/tag';
import { skillCategories } from '@/models/homepage';

export function SkillsSection(): JSX.Element {
  return (
    <section
      id="skills"
      className="scroll-mt-32 border-b border-border/60 px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Stack"
          title="Ferramentas que domino e exploro"
          description="Equilibro tecnologia consolidada com pesquisas em novas experiências. Esta é a caixa de ferramentas que costumo levar para cada projeto."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((group) => (
            <article
              key={group.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-secondary/60 px-6 py-7 backdrop-blur-sm transition motion-safe:hover:-translate-y-1 hover:border-primary/70 motion-safe:hover:bg-secondary/80 motion-reduce:transform-none"
            >
              <header className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-primary/80">
                  {group.name}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {group.skills.length} itens
                </span>
              </header>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} variant="solid" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
