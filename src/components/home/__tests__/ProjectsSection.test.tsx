import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ProjectsSection } from '../ProjectsSection';

const trackMock = jest.fn();

jest.mock('@vercel/analytics', () => ({
  track: (name: string, payload: Record<string, unknown>) =>
    trackMock(name, payload),
}));

describe('ProjectsSection', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    trackMock.mockClear();
  });

  it('exibe os projetos iniciais e descrição alinhada ao filtro', () => {
    render(<ProjectsSection />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /seleção de produtos, ferramentas e pixel art/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Visualize todos os estudos, produtos e experimentos/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Orion Labs/i)).toBeInTheDocument();
    expect(screen.getByText(/DX Monitor/i)).toBeInTheDocument();
  });

  it('filtra projetos por tag e envia evento de analytics', async () => {
    render(<ProjectsSection />);

    const filterButton = screen.getByRole('button', { name: /open source/i });
    await user.click(filterButton);

    expect(trackMock).toHaveBeenCalledWith('filter_projects', {
      filter: 'oss',
    });
    expect(screen.getByText(/Pixel Quest Engine/i)).toBeInTheDocument();
    expect(screen.queryByText(/Orion Labs/i)).not.toBeInTheDocument();
  });

  it('indica estado pressionado no filtro ativo', async () => {
    render(<ProjectsSection />);

    const button = screen.getByRole('button', { name: /mentorias/i });
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await user.click(button);

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
});
