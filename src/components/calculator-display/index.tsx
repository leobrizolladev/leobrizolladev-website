import Text from '../text';

interface CalculatorDisplayBase {
  operation: string;
  result: string;
}

type CalculatorDisplayProps = Readonly<CalculatorDisplayBase>;

export default function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div
      data-testid="calculator-display"
      className={`flex flex-col gap-2 px-[1.375rem] cursor-pointer select-none`}
    >
      <Text
        as="div"
        variant="muted"
        className={`flex items-center justify-end h-7`}
        data-testid="calculator-operator"
      >
        {result && operation}
      </Text>
      <div className={`flex items-center justify-between h-9`}>
        <Text variant="muted" data-testid="calculator-equals">
          =
        </Text>
        <Text variant="blast" data-testid="calculator-result">
          {result || operation}
        </Text>
      </div>
    </div>
  );
}
