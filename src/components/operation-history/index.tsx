'use client';

import { CalculatorContext } from '@/context/calculator-context';
import { useContext } from 'react';
import Card from '../card';
import Text from '../text';

export function OperationHistory() {
  const { history } = useContext(CalculatorContext);

  return (
    <Card
      className={`w-full py-10 px-8 sm:max-w-2xl`}
      data-testid="operation-history"
    >
      <Text
        as="h1"
        variant="heading"
        className={`mb-4`}
        data-testid="operation-history-title"
      >
        Histórico de Operações
      </Text>
      {history.length > 0 ? (
        <ul
          className={`flex flex-col gap-3`}
          data-testid="operation-history-list"
        >
          {history?.map((item, index) => (
            <Text
              as="li"
              key={`history-item-${index}-${item?.length}`}
              data-testid="operation-history-item"
            >
              {item}
            </Text>
          ))}
        </ul>
      ) : (
        <Text
          as="p"
          variant="muted"
          key={`history-item-empty`}
          data-testid="operation-history-empty"
        >
          Nenhuma operação realizada
        </Text>
      )}
    </Card>
  );
}
