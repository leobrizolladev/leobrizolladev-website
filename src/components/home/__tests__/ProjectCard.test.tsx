import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ProjectCard } from '../ProjectCard';
import { projects } from '@/models/projects';

const trackMock = jest.fn();

jest.mock('@vercel/analytics', () => ({
  track: (name: string, payload: Record<string, unknown>) =>
    trackMock(name, payload),
}));

describe('ProjectCard', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    trackMock.mockClear();
  });

  it('renderiza informações principais do projeto', () => {
    const project = projects.find((item) => item.id === 'pixel-quest');
    if (!project) {
      throw new Error('Projeto pixel-quest não encontrado');
    }

    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole('heading', { level: 3, name: project.title })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Open source/i)).toHaveLength(2);
    expect(screen.getByText(/412/)).toBeInTheDocument();
    expect(screen.getByText(project.excerpt)).toBeInTheDocument();
  });

  it('dispara evento ao clicar em link do projeto', async () => {
    const project = projects.find((item) => item.id === 'pixel-quest');
    if (!project) {
      throw new Error('Projeto pixel-quest não encontrado');
    }

    render(<ProjectCard project={project} />);

    const link = screen.getByRole('link', { name: /github/i });
    await user.click(link);

    expect(trackMock).toHaveBeenCalledWith('open_project_link', {
      projectId: project.id,
      linkLabel: 'github',
    });
  });
});
