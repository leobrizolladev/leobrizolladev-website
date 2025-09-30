import type { JSX } from 'react';
import { projects } from '@/models/projects';

const siteUrl = 'https://leobrizolla.dev';
const sameAs = [
  'https://github.com/leobrizolla',
  'https://www.linkedin.com/in/leobrizolla/',
  'https://x.com/leobrizolla',
];

function createSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: 'Leonardo Brizolla',
        jobTitle: 'Desenvolvedor Full Stack',
        description:
          'Desenvolvedor full stack focado em produtos web performáticos, devtools e estética pixel art.',
        email: 'mailto:contato@leobrizolla.dev',
        url: siteUrl,
        sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Leonardo Brizolla — Desenvolvedor Full Stack',
        description:
          'Portfólio com projetos, experimentos e contato de Leonardo Brizolla.',
        publisher: {
          '@id': `${siteUrl}#person`,
        },
      },
      {
        '@type': 'ItemList',
        name: 'Projetos em destaque',
        itemListElement: projects.slice(0, 5).map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.excerpt,
            url:
              project.links.find((link) => link.label === 'demo')?.href ??
              project.links[0]?.href ??
              siteUrl,
            keywords: project.tags.join(', '),
          },
        })),
      },
    ],
  };
}

export function SchemaMarkup(): JSX.Element {
  const schema = createSchema();

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
