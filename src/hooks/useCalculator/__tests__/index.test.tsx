import { CalculatorContext } from '@/context/calculator-context';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { useCalculator } from '../index';

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

describe('useCalculator Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with empty operation and result', () => {
    const { result } = renderHook(() => useCalculator(), {
      wrapper: MockProvider,
    });

    expect(result.current.operation).toBe('');
    expect(result.current.result).toBe('');
    expect(typeof result.current.doOperator).toBe('function');
  });

  describe('Basic number input', () => {
    it('should add numbers to operation', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('5');
      });

      expect(result.current.operation).toBe('5');
      expect(result.current.result).toBe('');
    });

    it('should concatenate multiple numbers', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('1');
      });

      act(() => {
        result.current.doOperator('2');
      });

      act(() => {
        result.current.doOperator('3');
      });

      expect(result.current.operation).toBe('123');
    });
  });

  describe('Mathematical operations', () => {
    it('should perform addition', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('2');
      });

      act(() => {
        result.current.doOperator('+');
      });

      act(() => {
        result.current.doOperator('3');
      });

      act(() => {
        result.current.doOperator('=');
      });

      expect(result.current.operation).toBe('2+3');
      expect(result.current.result).toBe('5');
      expect(mockUpdateHistory).toHaveBeenCalledWith('2+3', '5');
    });

    it('should perform subtraction', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('10');
      });

      act(() => {
        result.current.doOperator('-');
      });

      act(() => {
        result.current.doOperator('3');
      });

      act(() => {
        result.current.doOperator('=');
      });

      expect(result.current.operation).toBe('10-3');
      expect(result.current.result).toBe('7');
    });

    it('should perform multiplication', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('4');
      });
      act(() => {
        result.current.doOperator('*');
      });
      act(() => {
        result.current.doOperator('5');
      });
      act(() => {
        result.current.doOperator('=');
      });

      expect(result.current.operation).toBe('4*5');
      expect(result.current.result).toBe('20');
    });

    it('should perform division', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('15');
      });
      act(() => {
        result.current.doOperator('/');
      });
      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator('=');
      });

      expect(result.current.operation).toBe('15/3');
      expect(result.current.result).toBe('5');
    });
  });

  describe('Decimal operations', () => {
    it('should handle decimal input with comma', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator(',');
      });
      act(() => {
        result.current.doOperator('5');
      });

      expect(result.current.operation).toBe('3,5');
    });

    it('should not add multiple commas', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator(',');
      });
      act(() => {
        result.current.doOperator(',');
      });
      act(() => {
        result.current.doOperator('5');
      });

      expect(result.current.operation).toBe('3,5');
    });

    it('should convert decimal result from dot to comma', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('7');
      });
      act(() => {
        result.current.doOperator('/');
      });
      act(() => {
        result.current.doOperator('2');
      });
      act(() => {
        result.current.doOperator('=');
      });

      expect(result.current.operation).toBe('7/2');
      expect(result.current.result).toBe('3,5');
    });
  });

  describe('Control functions', () => {
    it('should clear everything with C', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('123');
        result.current.doOperator('C');
      });

      expect(result.current.operation).toBe('');
      expect(result.current.result).toBe('');
    });

    it('should clear last entry with CE', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('1');
      });
      act(() => {
        result.current.doOperator('2');
      });
      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator('CE');
      });

      expect(result.current.operation).toBe('12');
      expect(result.current.result).toBe('');
    });

    it('should clear result when using CE', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('2');
      });
      act(() => {
        result.current.doOperator('+');
      });
      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator('=');
      });
      act(() => {
        result.current.doOperator('CE');
      });

      expect(result.current.operation).toBe('2+');
      expect(result.current.result).toBe('');
    });
  });

  describe('Error handling', () => {
    it('should show error for invalid expressions', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('2');
        result.current.doOperator('+');
        result.current.doOperator('+');
        result.current.doOperator('=');
      });

      expect(result.current.result).toBe('Erro');
    });

    it('should show error for division by zero', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('5');
        result.current.doOperator('/');
        result.current.doOperator('0');
        result.current.doOperator('=');
      });

      expect(result.current.result).toBe('Erro');
    });
  });

  describe('Result continuation', () => {
    it('should use result as new operation when entering operator', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('2');
      });
      act(() => {
        result.current.doOperator('+');
      });
      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator('=');
      });
      act(() => {
        result.current.doOperator('*');
      });
      act(() => {
        result.current.doOperator('2');
      });

      expect(result.current.operation).toBe('5*2');
      expect(result.current.result).toBe('');
    });

    it('should replace operation when entering number after result', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: MockProvider,
      });

      act(() => {
        result.current.doOperator('2');
      });
      act(() => {
        result.current.doOperator('+');
      });
      act(() => {
        result.current.doOperator('3');
      });
      act(() => {
        result.current.doOperator('=');
      });
      act(() => {
        result.current.doOperator('7');
      });

      expect(result.current.operation).toBe('7');
      expect(result.current.result).toBe('');
    });
  });
});
