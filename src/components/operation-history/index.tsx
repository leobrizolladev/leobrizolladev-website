import Card from '../card';
import Text from '../text';

export default function OperationHistory() {
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

      <ul
        className={`flex flex-col gap-3`}
        data-testid="operation-history-list"
      >
        <Text as="li" data-testid="operation-history-item">
          1 + 1 = 2
        </Text>
        <Text as="li">2 + 3 + 1 = 6</Text>
        <Text as="li">2 + 3 = 5</Text>
      </ul>
    </Card>
  );
}
