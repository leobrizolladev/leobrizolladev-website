export interface HeroContent {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly primaryCta: {
    readonly label: string;
    readonly href: string;
  };
  readonly secondaryCta: {
    readonly label: string;
    readonly href: string;
  };
}

export interface Metric {
  readonly label: string;
  readonly value: string;
}

export interface AboutItem {
  readonly title: string;
  readonly description: string;
}

export interface SkillCategory {
  readonly name: string;
  readonly skills: readonly string[];
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly description: string;
}

export const heroContent: HeroContent = {
  title: 'Construo experiências web com cuidado artesanal',
  subtitle: 'Leonardo Brizolla · Desenvolvedor full stack',
  description:
    'Transformo ideias em produtos digitais performáticos e acessíveis. Apaixonado por DX, arquitetura limpa e interfaces que contam histórias.',
  primaryCta: {
    label: 'Ver projetos em destaque',
    href: '#projetos',
  },
  secondaryCta: {
    label: 'Falar comigo',
    href: 'mailto:leobrizolla@proton.me',
  },
};

export const heroMetrics: readonly Metric[] = [
  {
    label: 'Anos de código',
    value: '+3',
  },
  // {
  //   label: 'Projetos entregues',
  //   value: '2',
  // },
  // {
  //   label: 'Contribuições OSS',
  //   value: '0',
  // },
];

export const aboutItems: readonly AboutItem[] = [
  {
    title: 'Arquitetura pragmática',
    description:
      'Busco simplicidade sustentável: design modular, testes sólidos e documentação viva que acelera o onboarding.',
  },
  {
    title: 'Obsessão por DX',
    description:
      'Integro toolings que reduzem atrito, automações que evitam retrabalho e padrões que escalam com o time.',
  },
  {
    title: 'Interfaces com personalidade',
    description:
      'Gosto de combinar estética retro com acessibilidade moderna — microinterações que dão vida sem pesar na performance.',
  },
];

export const skillCategories: readonly SkillCategory[] = [
  {
    name: 'Linguagens',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Zustand'],
  },
  {
    name: 'Backend',
    skills: ['NestJS', 'Prisma', 'PostgreSQL', 'REST', 'GraphQL'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
  {
    name: 'Experimentos',
    skills: ['Design Systems', 'Storybook'],
  },
];

export const contactLinks: readonly ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/leobrizolladev',
    description: 'Repositórios públicos',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leobrizolladev/',
    description: 'Trajetória profissional e recomendações',
  },
  {
    label: 'E-mail',
    href: 'mailto:leobrizolla@proton.me',
    description: 'Vamos conversar sobre projetos e colaborações',
  },
];
