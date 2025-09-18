import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '../index';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(<Card>text Calculator</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Card>Default Text</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text).toHaveClass('bg-(--background-calculator)');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Text</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text).toHaveClass('custom-class');
  });

  it('forwards additional props to text element', () => {
    render(<Card aria-disabled>Disabled Text</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders as text element with correct type', () => {
    render(<Card>Test Text</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text.tagName).toBe('DIV');
  });

  it('applies all default styling classes', () => {
    render(<Card>Styled Text</Card>);

    const text = screen.getByTestId('card-calculator');

    expect(text).toHaveClass(
      'bg-(--background-calculator)',
      'shadow-(--shadow-calculator)',
      'rounded-2xl'
    );
  });
});
