import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OperationHistory from '../index';

describe('OperationHistory Component', () => {
  it('renders the component correctly', () => {
    render(<OperationHistory />);

    const operationHistory = screen.getByTestId('operation-history');
    const title = screen.getByTestId('operation-history-title');
    const list = screen.getByTestId('operation-history-list');
    const items = screen.getAllByTestId('operation-history-item');

    expect(operationHistory).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Histórico de Operações');
    expect(list).toBeInTheDocument();
    expect(items[0]).toHaveTextContent('1 + 1 = 2');
  });
});
