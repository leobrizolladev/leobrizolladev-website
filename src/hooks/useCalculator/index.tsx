import { CalculatorContext } from '@/context/calculator-context';
import { useContext, useState } from 'react';

export function useCalculator() {
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const { updateHistory } = useContext(CalculatorContext);

  function doOperator(input: string) {
    if (input === 'C') {
      setOperation('');
      setResult('');
      return;
    }

    if (input === 'CE') {
      setOperation(operation.slice(0, -1).trim());
      setResult('');
      return;
    }

    if (input === '=') {
      const safeEval = (expr: string): number => {
        if (!/^[\d+\-*/.,\s]+$/.test(expr)) {
          throw new Error('Invalid expression');
        }
        const sanitizedExpr = expr.replace(/,/g, '.');
        return Function(`"use strict";return (${sanitizedExpr})`)();
      };

      let operationResult: number;
      try {
        operationResult = safeEval(operation);
      } catch {
        setResult('Erro');
        return;
      }
      const parsedResult: string = operationResult
        .toString()
        ?.replace(/\./g, ',');

      setResult(parsedResult);
      updateHistory(operation, parsedResult);

      return;
    }

    if (result) {
      setOperation(Number.isNaN(Number(input)) ? `${result}${input}` : input);
      setResult('');
      return;
    }

    if (input === ',' && operation.endsWith(',')) {
      return;
    }

    if (input === ',' && !operation.endsWith(',')) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${input}`);
  }

  return {
    operation,
    result,
    doOperator,
  };
}
