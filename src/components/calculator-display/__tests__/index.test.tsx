import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CalculatorDisplay from '../index';

describe('CalculatorDisplay Component', () => {
  it('renders operation and result correctly', () => {
    render(<CalculatorDisplay operation="5 + 3" result="8" />);

    expect(screen.getByTestId('calculator-operator')).toHaveTextContent(
      '5 + 3'
    );
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('8');
  });

  it('renders empty operator and result correctly', () => {
    render(<CalculatorDisplay operation="" result="" />);

    expect(screen.getByTestId('calculator-operator')).toHaveTextContent('');
    expect(screen.getByTestId('calculator-result')).toHaveTextContent('');
  });

  it('renders component structure correctly', () => {
    render(<CalculatorDisplay operation="5 + 3" result="8" />);

    expect(screen.getByTestId('calculator-display')).toBeInTheDocument();
    expect(screen.getByTestId('calculator-operator')).toBeInTheDocument();
    expect(screen.getByTestId('calculator-equals')).toBeInTheDocument();
    expect(screen.getByTestId('calculator-result')).toBeInTheDocument();
  });

  it('renders various operator and result combinations', () => {
    const testCases = [
      { operator: '10 - 2', result: '8' },
      { operator: '4 * 2', result: '8' },
      { operator: '16 / 2', result: '8' },
      { operator: '2 ^ 3', result: '8' },
    ];

    testCases.forEach(({ operator, result }) => {
      document.body.innerHTML = '';

      render(<CalculatorDisplay operation={operator} result={result} />);

      expect(screen.getByTestId('calculator-operator')).toHaveTextContent(
        operator
      );
      expect(screen.getByTestId('calculator-result')).toHaveTextContent(result);
    });
  });
});
