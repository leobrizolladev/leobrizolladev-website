import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Cairo, Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap',
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://leobrizolladev.com.br';
const siteTitle = 'Leonardo Brizolla — Desenvolvedor Full Stack';
const siteDescription =
  'Portfólio de Leonardo Brizolla com projetos full stack';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s · Leonardo Brizolla',
  },
  description: siteDescription,
  keywords: [
    'Leonardo Brizolla',
    'Full Stack',
    'Next.js',
    'React',
    'Desenvolvedor web',
    'Portfólio dev',
  ],
  authors: [{ name: 'Leonardo Brizolla', url: siteUrl }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Leonardo Brizolla',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leobrizolladev',
    creator: '@leobrizolladev',
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${rubik.variable} ${cairo.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
