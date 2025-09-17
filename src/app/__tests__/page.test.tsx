import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    const heading = screen.getByText('Léo Brizolla Dev');

    expect(heading).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Home />);

    const subtitle = screen.getByText(/Projetos/i);

    expect(subtitle).toBeInTheDocument();
  });
});
