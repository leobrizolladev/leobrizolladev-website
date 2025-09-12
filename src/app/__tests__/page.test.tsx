import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /next\.js \+ claude code/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Home />);

    const subtitle = screen.getByText(
      /projeto limpo e pronto para desenvolvimento/i
    );

    expect(subtitle).toBeInTheDocument();
  });
});
