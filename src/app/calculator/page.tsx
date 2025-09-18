import Button from '@/components/button';
import Text from '@/components/text';

export function Calculator() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans-calculator flex items-center justify-center">
      <Text as="h1" className="text-center">
        Em construção...
      </Text>
      <Button disabled variant="default">
        Calcular
      </Button>
    </div>
  );
}

export default Calculator;
