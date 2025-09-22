import { CalculatorComponent } from '@/components/calculator-component';
import { OperationHistory } from '@/components/operation-history';
import { CalculatorProvider } from '@/context/calculator-context';

export function Calculator() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 justify-center py-28 px-4 sm:px-10">
      <CalculatorProvider>
        <CalculatorComponent />
        <OperationHistory />
      </CalculatorProvider>
    </div>
  );
}

export default Calculator;
