import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Text from '../index';

describe('Text Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup({
      delay: null,
      advanceTimers: jest.advanceTimersByTime,
    });
  });
  it('renders children correctly', () => {
    render(<Text>text</Text>);

    const text = screen.getByText('text');

    expect(text).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Text>Default Text</Text>);

    const text = screen.getByText('Default Text');

    expect(text).toHaveClass('text-xl');
  });

  it('applies muted variant classes', () => {
    render(<Text variant="muted">Muted Text</Text>);

    const text = screen.getByText('Muted Text');

    expect(text).toHaveClass('text-xl text-(--text-secondary-calculator)');
  });

  it('applies heading variant classes', () => {
    render(<Text variant="heading">Heading Text</Text>);

    const text = screen.getByText('Heading Text');

    expect(text).toHaveClass('text-2xl');
  });

  it('applies blast variant classes', () => {
    render(<Text variant="blast">Blast Text</Text>);

    const text = screen.getByText('Blast Text');

    expect(text).toHaveClass('text-3xl');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Custom Text</Text>);

    const text = screen.getByText('Custom Text');

    expect(text).toHaveClass('custom-class');
  });

  it('forwards additional props to text element', () => {
    render(
      <Text aria-disabled data-testid="test-text">
        Disabled Text
      </Text>
    );

    const text = screen.getByTestId('test-text');

    expect(text).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles onClick events', async () => {
    const handleClick = jest.fn();
    render(
      <Text as="button" onClick={handleClick}>
        Click me
      </Text>
    );

    const text = screen.getByRole('button', { name: /Click me/i });
    await user.click(text);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles multiple interactions', async () => {
    const handleClick = jest.fn();
    const handleMouseEnter = jest.fn();
    render(
      <Text as="button" onClick={handleClick} onMouseEnter={handleMouseEnter}>
        Interactive Text
      </Text>
    );

    const text = screen.getByRole('button', { name: /Interactive Text/i });

    await user.hover(text);
    await user.click(text);
    await user.click(text);

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('renders as text element with correct type', () => {
    render(<Text>Test Text</Text>);

    const text = screen.getByText('Test Text');

    expect(text.tagName).toBe('SPAN');
  });

  it('applies all default styling classes', () => {
    render(<Text>Styled Text</Text>);

    const text = screen.getByText('Styled Text');

    expect(text).toHaveClass('text-xl');
  });
});
