import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('@vercel/analytics', () => ({ track: jest.fn() }));

import Home from '../page';

describe('Home Page', () => {
  it('renderiza headline principal e CTA', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /construo experiências web com cuidado artesanal/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /ver projetos em destaque/i })
    ).toBeInTheDocument();
  });

  it('exibe métricas e seções principais', () => {
    render(<Home />);

    expect(screen.getByText(/Anos de código/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Tecnologia com propósito/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /Ferramentas que domino/i })
    ).toBeInTheDocument();
  });
});
