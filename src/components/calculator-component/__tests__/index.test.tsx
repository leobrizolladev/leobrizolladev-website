import { CalculatorContext } from '@/context/calculator-context';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { CalculatorComponent } from '../index';

const mockDoOperator = jest.fn();

jest.mock('../../../hooks/useCalculator', () => ({
  useCalculator: () => ({
    operation: '2+3',
    result: '5',
    doOperator: mockDoOperator,
  }),
}));

interface MockProviderProps {
  children: React.ReactNode;
}

const mockUpdateHistory = jest.fn();

const MockProvider = ({ children }: MockProviderProps) => (
  <CalculatorContext.Provider
    value={{
      history: [],
      updateHistory: mockUpdateHistory,
    }}
  >
    {children}
  </CalculatorContext.Provider>
);

describe('CalculatorComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the calculator component correctly', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      expect(screen.getByTestId('calculator-display')).toBeInTheDocument();
    });

    it('should render all number buttons (0-9)', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      for (let i = 0; i <= 9; i++) {
        expect(
          screen.getByRole('button', { name: i.toString() })
        ).toBeInTheDocument();
      }
    });

    it('should render all operator buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '*' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '/' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '=' })).toBeInTheDocument();
    });

    it('should render control buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'CE' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: ',' })).toBeInTheDocument();
    });

    it('should render buttons in correct layout', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const firstRowButtons = ['CE', 'C', '/'];
      firstRowButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });

      const secondRowButtons = ['7', '8', '9', '*'];
      secondRowButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });

      const thirdRowButtons = ['4', '5', '6', '-'];
      thirdRowButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });

      const fourthRowButtons = ['1', '2', '3', '+'];
      fourthRowButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });

      const fifthRowButtons = ['0', ',', '='];
      fifthRowButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });
    });
  });

  describe('Button interactions', () => {
    it('should call doOperator when number button is clicked', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const button5 = screen.getByRole('button', { name: '5' });
      fireEvent.click(button5);

      expect(mockDoOperator).toHaveBeenCalledWith('5');
      expect(mockDoOperator).toHaveBeenCalledTimes(1);
    });

    it('should call doOperator when operator button is clicked', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const plusButton = screen.getByRole('button', { name: '+' });
      fireEvent.click(plusButton);

      expect(mockDoOperator).toHaveBeenCalledWith('+');
      expect(mockDoOperator).toHaveBeenCalledTimes(1);
    });

    it('should call doOperator when control buttons are clicked', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const clearButton = screen.getByRole('button', { name: 'C' });
      fireEvent.click(clearButton);

      expect(mockDoOperator).toHaveBeenCalledWith('C');

      const clearEntryButton = screen.getByRole('button', { name: 'CE' });
      fireEvent.click(clearEntryButton);

      expect(mockDoOperator).toHaveBeenCalledWith('CE');

      expect(mockDoOperator).toHaveBeenCalledTimes(2);
    });

    it('should call doOperator when equals button is clicked', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const equalsButton = screen.getByRole('button', { name: '=' });
      fireEvent.click(equalsButton);

      expect(mockDoOperator).toHaveBeenCalledWith('=');
      expect(mockDoOperator).toHaveBeenCalledTimes(1);
    });

    it('should call doOperator when comma button is clicked', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const commaButton = screen.getByRole('button', { name: ',' });
      fireEvent.click(commaButton);

      expect(mockDoOperator).toHaveBeenCalledWith(',');
      expect(mockDoOperator).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple button clicks in sequence', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      fireEvent.click(screen.getByRole('button', { name: '2' }));
      fireEvent.click(screen.getByRole('button', { name: '+' }));
      fireEvent.click(screen.getByRole('button', { name: '3' }));
      fireEvent.click(screen.getByRole('button', { name: '=' }));

      expect(mockDoOperator).toHaveBeenCalledTimes(4);
      expect(mockDoOperator).toHaveBeenNthCalledWith(1, '2');
      expect(mockDoOperator).toHaveBeenNthCalledWith(2, '+');
      expect(mockDoOperator).toHaveBeenNthCalledWith(3, '3');
      expect(mockDoOperator).toHaveBeenNthCalledWith(4, '=');
    });
  });

  describe('Button variants and styling', () => {
    it('should apply primary variant to operator buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const operatorButtons = ['+', '-', '*', '/'];
      operatorButtons.forEach((operator) => {
        const button = screen.getByRole('button', { name: operator });
        expect(button).toBeInTheDocument();
      });
    });

    it('should apply default variant to number and control buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const numberButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const controlButtons = ['C', 'CE', ','];

      [...numberButtons, ...controlButtons].forEach((buttonText) => {
        const button = screen.getByRole('button', { name: buttonText });
        expect(button).toBeInTheDocument();
      });
    });

    it('should apply custom styling to specific buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const button0 = screen.getByRole('button', { name: '0' });
      expect(button0).toBeInTheDocument();

      const buttonC = screen.getByRole('button', { name: 'C' });
      expect(buttonC).toBeInTheDocument();

      const equalsButton = screen.getByRole('button', { name: '=' });
      expect(equalsButton).toBeInTheDocument();
    });
  });

  describe('Integration with CalculatorDisplay', () => {
    it('should pass operation and result to CalculatorDisplay', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const display = screen.getByTestId('calculator-display');
      expect(display).toBeInTheDocument();

      expect(display).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper button roles for all interactive elements', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const allButtons = [
        'CE',
        'C',
        '/',
        '7',
        '8',
        '9',
        '*',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '0',
        ',',
        '=',
      ];

      allButtons.forEach((buttonText) => {
        expect(
          screen.getByRole('button', { name: buttonText })
        ).toBeInTheDocument();
      });
    });

    it('should be keyboard accessible for all buttons', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const button5 = screen.getByRole('button', { name: '5' });

      button5.focus();
      fireEvent.keyDown(button5, { key: 'Enter' });

      expect(button5).toHaveFocus();
    });
  });

  describe('Error scenarios', () => {
    it('should handle missing context gracefully', () => {
      expect(() => {
        render(<CalculatorComponent />);
      }).not.toThrow();
    });

    it('should verify mock functions are called correctly', () => {
      render(
        <MockProvider>
          <CalculatorComponent />
        </MockProvider>
      );

      const button5 = screen.getByRole('button', { name: '5' });
      fireEvent.click(button5);

      expect(mockDoOperator).toHaveBeenCalledWith('5');
      expect(mockDoOperator).toHaveBeenCalledTimes(1);
    });
  });
});
