'use client';

import type { JSX } from 'react';
import { track } from '@vercel/analytics';
import { useMemo, useState } from 'react';
import { SectionHeading } from '@/core-components/section-heading';
import type { Project, ProjectTag } from '@/models/project';
import { projectTags, projects } from '@/models/projects';
import { cn } from '@/helpers/utils';
import { ProjectCard } from './ProjectCard';

const BASE_FILTER = {
  id: 'todos',
  label: 'Todos',
  description:
    'Visualize todos os estudos, produtos e experimentos em uma única grade.',
} as const;

type FilterId = typeof BASE_FILTER.id | ProjectTag;

type FilterOption = {
  readonly id: FilterId;
  readonly label: string;
  readonly description: string;
};

const FILTER_OPTIONS: readonly FilterOption[] = [
  BASE_FILTER,
  ...projectTags.map((tag) => ({
    id: tag.id,
    label: tag.label,
    description: tag.description,
  })),
] as const;

function filterProjects(
  items: readonly Project[],
  filter: FilterId
): readonly Project[] {
  if (filter === 'todos') {
    return items;
  }

  return items.filter((project) => project.tags.includes(filter));
}

export function ProjectsSection(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterId>('todos');

  const visibleProjects = useMemo(
    () => filterProjects(projects, activeFilter),
    [activeFilter]
  );

  const activeOption = useMemo(
    () =>
      FILTER_OPTIONS.find((option) => option.id === activeFilter) ??
      BASE_FILTER,
    [activeFilter]
  );

  return (
    <section
      id="projetos"
      className="scroll-mt-32 border-b border-border/60 px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projetos"
            title="Seleção de produtos, ferramentas e pixel art"
            description={activeOption.description}
            className="max-w-2xl"
          />
          <div className="flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((option) => {
              const isActive = option.id === activeFilter;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveFilter(option.id);
                    track('filter_projects', { filter: option.id });
                  }}
                  className={cn(
                    'rounded-full border px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border/80 bg-secondary/60 text-muted-foreground hover:border-primary/60 hover:text-primary'
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-border/50 bg-card/60 px-8 py-16 text-center text-sm text-muted-foreground">
              Nenhum projeto nessa categoria por enquanto — novas
              experimentações estão a caminho.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
