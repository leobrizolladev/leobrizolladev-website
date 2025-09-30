import type { Project, ProjectTagDefinition } from './project';

export const projectTags: readonly ProjectTagDefinition[] = [
  {
    id: 'produto',
    label: 'Produtos',
    description: 'Aplicações completas em produção com base de usuários.',
  },
  {
    id: 'saas',
    label: 'SaaS',
    description: 'Plataformas recorrentes desenhadas para escala.',
  },
  {
    id: 'devtools',
    label: 'DevTools',
    description: 'Ferramentas que melhoram a experiência de desenvolvimento.',
  },
  {
    id: 'oss',
    label: 'Open Source',
    description: 'Projetos abertos mantidos e documentados.',
  },
  {
    id: 'experimento',
    label: 'Study',
    description: 'Explorações visuais, engines e protótipos.',
  },
  {
    id: 'mentoria',
    label: 'Mentorias',
    description: 'Mentorias técnicas e facilitação de workshops.',
  },
  {
    id: 'talk',
    label: 'Talks',
    description: 'Palestras e comunidades.',
  },
] as const;

export const projects: readonly Project[] = [
  {
    id: 'calculator',
    title: 'Calculator',
    excerpt: 'Fundamentals of React with Atomic Design Methodology',
    description:
      'Project developed to practice the fundamentals of React with Atomic Design Methodology.',
    stack: ['React', 'Next.js', 'Tailwind.css', 'JEST'],
    tags: ['experimento'],
    status: 'live',
    year: 2025,
    highlights: [
      'Components - Virtual DOM - JSX',
      'Hooks - Custom Hooks - Context API - Providers',
      'React Testing Library - Local Storage',
    ],
    links: [
      { label: 'demo', href: 'https://leobrizolladev.com.br/calculator' },
      {
        label: 'github',
        href: 'https://github.com/leobrizolladev/leobrizolladev-website/blob/main/src/app/calculator/page.tsx',
      },
    ],
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    excerpt: 'CRUD project.',
    description:
      'Segundo projeto feito para praticar os conceitos basicos do React.',
    stack: ['React', 'Next.js', 'Tailwind.css', 'Turborepo', 'JEST', 'CVA'],
    tags: ['experimento'],
    status: 'live',
    year: 2025,
    highlights: [
      'Class Variance Authority - useLocalStorage',
      'Custom Hooks - Models',
      'Skeletons - Loadings',
    ],
    links: [
      { label: 'demo', href: 'https://leobrizolladev.com.br/todo-list' },
      {
        label: 'github',
        href: 'https://github.com/leobrizolladev/leobrizolladev-website/blob/main/src/app/todo-list/page.tsx',
      },
    ],
  },
] as const;
