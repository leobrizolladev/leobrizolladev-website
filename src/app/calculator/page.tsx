'use client';

import Button from '@/components/button';
import CalculatorDisplay from '@/components/calculator-display';
import Card from '@/components/card';
import OperationHistory from '@/components/operation-history';
import { useState } from 'react';

const buttons = [
  [
    { input: 'CE' },
    { input: 'C', className: 'flex-1 h-16' },
    { input: '/', variant: 'primary' },
  ],
  [
    { input: '7' },
    { input: '8' },
    { input: '9' },
    { input: '*', variant: 'primary' },
  ],
  [
    { input: '4' },
    { input: '5' },
    { input: '6' },
    { input: '-', variant: 'primary' },
  ],
  [
    { input: '1' },
    { input: '2' },
    { input: '3' },
    { input: '+', variant: 'primary' },
  ],
  [
    { input: '0', className: 'flex-1 h-16' },
    { input: ',' },
    { input: '=', className: 'w-16 h-16 bg-[#7F45E2]' },
  ],
];

export function Calculator() {
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleInputClick = (input: string) => {
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
      // Safe evaluation of basic math expressions
      try {
        const sanitized = operation
          .replace(/,/g, '.')
          .replace(/[^-()\d/*+.]/g, '');

        const operationResult = Function(
          `"use strict";return (${sanitized})`
        )();
        const parsedResult = operationResult.toString()?.replace(/\./g, ',');
        setResult(parsedResult);
      } catch {
        setResult('Erro');
      }
      return;
    }

    if (result) {
      setOperation(Number.isNaN(Number(input)) ? `${result}${input}` : input);
      setResult('');
      return;
    }

    if (input === ',' && !operation.endsWith(',')) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${input}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 justify-center py-28 px-4 sm:px-10">
      <Card
        className={`flex flex-col gap-[1.165rem] w-[22.25rem] pt-14 px-8 pb-8`}
      >
        <CalculatorDisplay operation={operation} result={result} />

        <div className={`flex flex-col gap-3`}>
          {buttons.map((row, rowIndex) => (
            <div key={`row-${rowIndex}-${row.length}`} className={`flex gap-3`}>
              {row.map((button) => (
                <Button
                  key={button.input}
                  className={`${button.className || 'w-16 h-16'}`}
                  variant={button.variant === 'primary' ? 'primary' : 'default'}
                  onClick={() => handleInputClick(button.input)}
                >
                  {button.input}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </Card>
      <OperationHistory />
    </div>
  );
}

export default Calculator;
