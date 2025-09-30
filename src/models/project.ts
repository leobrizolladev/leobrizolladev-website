export type ProjectStatus = 'live' | 'oss' | 'wip';

export type ProjectTag =
  | 'produto'
  | 'oss'
  | 'devtools'
  | 'experimento'
  | 'saas'
  | 'mentoria'
  | 'talk';

export interface ProjectLink {
  readonly label: 'demo' | 'github' | 'case';
  readonly href: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly tags: readonly ProjectTag[];
  readonly status: ProjectStatus;
  readonly year: number;
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly starCount?: number;
  readonly coverImage?: string;
}

export interface ProjectTagDefinition {
  readonly id: ProjectTag;
  readonly label: string;
  readonly description: string;
}
