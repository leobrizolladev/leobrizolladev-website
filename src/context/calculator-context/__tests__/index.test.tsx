import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { useContext } from 'react';
import { CalculatorContext, CalculatorProvider } from '../index';

interface WrapperProps {
  children: React.ReactNode;
}

const TestWrapper = ({ children }: WrapperProps) => (
  <CalculatorProvider>{children}</CalculatorProvider>
);

const useCalculatorContext = () => useContext(CalculatorContext);

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    length: 0,
    key: jest.fn(),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('CalculatorContext', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    jest.clearAllMocks();
  });

  describe('Initialization', () => {
    it('should initialize with empty history when no localStorage data', () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(result.current.history).toEqual([]);
      expect(typeof result.current.updateHistory).toBe('function');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith(
        'calculator_history'
      );
    });

    it('should initialize with stored history from localStorage', () => {
      const storedHistory = ['2+2=4', '5*3=15'];
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(storedHistory));

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(result.current.history).toEqual(storedHistory);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith(
        'calculator_history'
      );
    });

    it('should handle invalid localStorage data gracefully', () => {
      mockLocalStorage.getItem.mockReturnValue('invalid-json');

      expect(() => {
        renderHook(() => useCalculatorContext(), {
          wrapper: TestWrapper,
        });
      }).not.toThrow();
    });

    it('should handle empty string from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue('');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(result.current.history).toEqual([]);
    });
  });

  describe('updateHistory function', () => {
    it('should add new operation to history', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.updateHistory('2+3', '5');
      });

      expect(result.current.history).toEqual(['2+3=5']);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'calculator_history',
        JSON.stringify(['2+3=5'])
      );
    });

    it('should append to existing history', () => {
      const existingHistory = ['1+1=2'];
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(existingHistory));

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.updateHistory('3*4', '12');
      });

      expect(result.current.history).toEqual(['1+1=2', '3*4=12']);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'calculator_history',
        JSON.stringify(['1+1=2', '3*4=12'])
      );
    });

    it('should handle multiple consecutive updates', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.updateHistory('2+2', '4');
      });

      act(() => {
        result.current.updateHistory('5-3', '2');
      });

      act(() => {
        result.current.updateHistory('10/2', '5');
      });

      expect(result.current.history).toEqual(['2+2=4', '5-3=2', '10/2=5']);
      expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(3);
    });

    it('should format operation and result correctly', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.updateHistory('7/2', '3,5');
      });

      expect(result.current.history).toEqual(['7/2=3,5']);
    });
  });

  describe('Context value stability', () => {
    it('should maintain reference equality for updateHistory across renders', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result, rerender } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      const firstUpdateHistory = result.current.updateHistory;

      rerender();

      expect(result.current.updateHistory).toBe(firstUpdateHistory);
    });

    it('should provide stable context value when history changes', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      const initialContextValue = result.current;

      act(() => {
        result.current.updateHistory('1+1', '2');
      });

      // updateHistory should be the same reference
      expect(result.current.updateHistory).toBe(
        initialContextValue.updateHistory
      );
      // but history should be different
      expect(result.current.history).not.toBe(initialContextValue.history);
    });
  });

  describe('localStorage integration', () => {
    it('should save history to localStorage with correct key', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.updateHistory('8*9', '72');
      });

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'calculator_history',
        JSON.stringify(['8*9=72'])
      );
    });

    it('should load history from localStorage on mount', () => {
      const storedData = ['4+4=8', '9-3=6'];
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(storedData));

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(result.current.history).toEqual(storedData);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith(
        'calculator_history'
      );
    });

    it('should preserve localStorage data between context instances', () => {
      const initialData = ['5+5=10'];
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(initialData));

      // First instance
      const { result: result1 } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result1.current.updateHistory('6*6', '36');
      });

      // Simulate new context instance (app reload)
      mockLocalStorage.getItem.mockReturnValue(
        JSON.stringify(['5+5=10', '6*6=36'])
      );

      const { result: result2 } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(result2.current.history).toEqual(['5+5=10', '6*6=36']);
    });
  });

  describe('Error handling', () => {
    it('should handle localStorage getItem errors gracefully', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error('Storage error');
      });

      expect(() => {
        renderHook(() => useCalculatorContext(), {
          wrapper: TestWrapper,
        });
      }).not.toThrow();
    });

    it('should handle localStorage setItem errors gracefully', () => {
      mockLocalStorage.getItem.mockReturnValue('[]');
      mockLocalStorage.setItem.mockImplementation(() => {
        throw new Error('Storage quota exceeded');
      });

      const { result } = renderHook(() => useCalculatorContext(), {
        wrapper: TestWrapper,
      });

      expect(() => {
        act(() => {
          result.current.updateHistory('1+1', '2');
        });
      }).not.toThrow();

      // History should still be updated in memory
      expect(result.current.history).toEqual(['1+1=2']);
    });
  });
});
