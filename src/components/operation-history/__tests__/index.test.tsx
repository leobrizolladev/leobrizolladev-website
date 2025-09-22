import { CalculatorContext } from '@/context/calculator-context';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OperationHistory } from '../index';

interface MockProviderProps {
  children: React.ReactNode;
  value?: {
    history: string[];
    updateHistory: jest.Mock;
  };
}

const mockContextValue = {
  history: ['2+2=4', '5*3=15'],
  updateHistory: jest.fn(),
};

const MockProvider = ({
  children,
  value = mockContextValue,
}: MockProviderProps) => (
  <CalculatorContext.Provider value={value}>
    {children}
  </CalculatorContext.Provider>
);

describe('OperationHistory Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component correctly with history', () => {
    render(
      <MockProvider>
        <OperationHistory />
      </MockProvider>
    );

    const operationHistory = screen.getByTestId('operation-history');
    const title = screen.getByTestId('operation-history-title');
    const list = screen.getByTestId('operation-history-list');

    expect(operationHistory).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Histórico de Operações');
    expect(list).toBeInTheDocument();
  });

  it('displays history items correctly', () => {
    render(
      <MockProvider>
        <OperationHistory />
      </MockProvider>
    );

    const historyItems = screen.getAllByTestId('operation-history-item');
    expect(historyItems).toHaveLength(2);
    expect(historyItems[0]).toHaveTextContent('2+2=4');
    expect(historyItems[1]).toHaveTextContent('5*3=15');
  });

  it('renders empty state when history is empty', () => {
    const emptyHistoryValue = {
      history: [],
      updateHistory: jest.fn(),
    };

    render(
      <MockProvider value={emptyHistoryValue}>
        <OperationHistory />
      </MockProvider>
    );

    const operationHistory = screen.getByTestId('operation-history');
    const title = screen.getByTestId('operation-history-title');
    const emptyMessage = screen.getByTestId('operation-history-empty');

    expect(operationHistory).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Histórico de Operações');
    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('Nenhuma operação realizada');
    expect(
      screen.queryByTestId('operation-history-list')
    ).not.toBeInTheDocument();
  });
});
