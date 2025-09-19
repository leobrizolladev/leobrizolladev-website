import Text from '../text';

interface CalculatorDisplayBase {
  operator: string;
  result: string;
}

type CalculatorDisplayProps = Readonly<CalculatorDisplayBase>;

export default function CalculatorDisplay({
  operator,
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
        className={`flex items-center justify-end`}
        data-testid="calculator-operator"
      >
        {operator}
      </Text>
      <div className={`flex items-center justify-between`}>
        <Text variant="muted" data-testid="calculator-equals">
          =
        </Text>
        <Text variant="blast" data-testid="calculator-result">
          {result}
        </Text>
      </div>
    </div>
  );
}
