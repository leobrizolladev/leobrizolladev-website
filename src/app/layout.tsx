import type { Metadata } from 'next';
import { Cairo, Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Léo Brizolla Dev',
  description: 'Projetos de Léo Brizolla',
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
      </body>
    </html>
  );
}
