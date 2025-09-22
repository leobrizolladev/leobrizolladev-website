'use client';

import React, { useCallback } from 'react';

interface CalculatorContextValue {
  history: string[];
  updateHistory: (operation: string, parseResult: string) => void;
}

interface CalculatorContextBaseProps {
  children: React.ReactNode;
}

type CalculatorContextProps = Readonly<CalculatorContextBaseProps>;

export const CalculatorContext = React.createContext(
  {} as CalculatorContextValue
);

export function CalculatorProvider({ children }: CalculatorContextProps) {
  const [history, setHistory] = React.useState<string[]>([]);
  const historyStorageKey = 'calculator_history';

  const updateHistory = useCallback(
    (operation: string, parseResult: string) => {
      setHistory((prev) => {
        const updatedHistory = [...prev, `${operation}=${parseResult}`];

        try {
          localStorage.setItem(
            historyStorageKey,
            JSON.stringify(updatedHistory)
          );
        } catch (err) {
          console.log('Error saving history to localStorage', err);
        }

        return updatedHistory;
      });
    },
    []
  );

  React.useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(historyStorageKey);
      setHistory(JSON.parse(storedHistory || '[]'));
    } catch (err) {
      console.log('Error parsing stored history from localStorage', err);
    }
  }, []);

  const valueProvider = React.useMemo(
    () => ({
      history,
      updateHistory,
    }),
    [history, updateHistory]
  );

  return (
    <CalculatorContext.Provider value={valueProvider}>
      {children}
    </CalculatorContext.Provider>
  );
}
