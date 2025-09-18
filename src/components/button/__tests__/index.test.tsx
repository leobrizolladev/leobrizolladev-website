import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../index';

describe('Button Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup({
      delay: null,
      advanceTimers: jest.advanceTimersByTime,
    });
  });
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-(--background-calculator)');
  });

  it('applies primary variant classes', () => {
    render(<Button variant="primary">Primary Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-(--primary-calculator)');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  it('forwards additional props to button element', () => {
    render(
      <Button disabled data-testid="test-button">
        Disabled Button
      </Button>
    );

    const button = screen.getByTestId('test-button');

    expect(button).toBeDisabled();
  });

  it('handles onClick events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /Click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles multiple interactions', async () => {
    const handleClick = jest.fn();
    const handleMouseEnter = jest.fn();
    render(
      <Button onClick={handleClick} onMouseEnter={handleMouseEnter}>
        Interactive Button
      </Button>
    );

    const button = screen.getByRole('button', { name: /Interactive Button/i });

    await user.hover(button);
    await user.click(button);
    await user.click(button);

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('renders as button element with correct type', () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByRole('button');

    expect(button.tagName).toBe('BUTTON');
  });

  it('applies all default styling classes', () => {
    render(<Button>Styled Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'flex',
      'items-center',
      'rounded-xl',
      'p-3',
      'cursor-pointer'
    );
  });
});
