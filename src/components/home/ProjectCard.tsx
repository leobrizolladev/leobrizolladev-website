'use client';

import type { JSX } from 'react';
import { track } from '@vercel/analytics';
import { PixelButton } from '@/core-components/pixel-button';
import { Tag } from '@/core-components/tag';
import type { Project, ProjectTag } from '@/models/project';
import { projectTags } from '@/models/projects';

const TAG_LABEL = new Map<ProjectTag, string>(
  projectTags.map((tag) => [tag.id, tag.label])
);

function formatStatus(status: Project['status']): string {
  if (status === 'live') {
    return 'Em produção';
  }

  if (status === 'oss') {
    return 'Open source';
  }

  return 'Em evolução';
}

const STATUS_COLOR: Record<Project['status'], string> = {
  live: 'from-primary/30 via-primary/10 to-transparent text-primary',
  oss: 'from-accent/40 via-accent/10 to-transparent text-accent',
  wip: 'from-yellow-400/30 via-yellow-500/10 to-transparent text-yellow-400',
};

export interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const statusText = formatStatus(project.status);
  const gradient = STATUS_COLOR[project.status];

  return (
    <article
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/70 bg-card/80 px-6 py-8 shadow-[0_30px_60px_rgba(5,4,16,0.45)] transition motion-safe:hover:-translate-y-2 hover:border-primary/70 motion-safe:hover:shadow-[0_40px_90px_rgba(159,124,255,0.35)] motion-reduce:transform-none"
      data-analytics="project-card"
      data-project-id={project.id}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,_rgba(159,124,255,0.15),_rgba(0,224,255,0.08))] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full border border-primary/40 bg-gradient-to-r ${gradient} px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em]`}
          >
            {statusText}
          </span>
          {project.starCount ? (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              ⭐️ {project.starCount.toLocaleString('pt-BR')} stars
            </span>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={TAG_LABEL.get(tag) ?? tag} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground sm:text-base">
            {project.excerpt}
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground/90">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-sm bg-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mt-auto flex flex-wrap gap-3 pt-4">
        {project.links.map((link) => (
          <PixelButton
            key={link.href}
            href={link.href}
            variant="ghost"
            size="md"
            className="text-[0.58rem]"
            data-analytics="project-link"
            data-project-id={project.id}
            data-link-label={link.label}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={
              link.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            onClick={() =>
              track('open_project_link', {
                projectId: project.id,
                linkLabel: link.label,
              })
            }
          >
            {link.label}
          </PixelButton>
        ))}
      </div>
    </article>
  );
}
