import Button from '@/components/button';
import CalculatorDisplay from '@/components/calculator-display';
import Card from '@/components/card';

export function Calculator() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans-calculator flex items-center justify-center">
      <Card
        className={`flex flex-col gap-[1.165rem] w-[22.25rem] pt-14 px-8 pb-8`}
      >
        <CalculatorDisplay operator="5 + 3" result="8" />

        <div className={`flex flex-col gap-3`}>
          <div className={`flex gap-3`}>
            <Button className="w-16 h-16">CE</Button>
            <Button className="flex-1 h-16">C</Button>
            <Button className="w-16 h-16" variant="primary">
              /
            </Button>
          </div>

          <div className={`flex gap-3`}>
            <Button className="w-16 h-16">7</Button>
            <Button className="w-16 h-16">8</Button>
            <Button className="w-16 h-16">9</Button>
            <Button className="w-16 h-16" variant="primary">
              X
            </Button>
          </div>

          <div className={`flex gap-3`}>
            <Button className="w-16 h-16">4</Button>
            <Button className="w-16 h-16">5</Button>
            <Button className="w-16 h-16">6</Button>
            <Button className="w-16 h-16" variant="primary">
              -
            </Button>
          </div>

          <div className={`flex gap-3`}>
            <Button className="w-16 h-16">1</Button>
            <Button className="w-16 h-16">2</Button>
            <Button className="w-16 h-16">3</Button>
            <Button className="w-16 h-16" variant="primary">
              +
            </Button>
          </div>

          <div className={`flex gap-3`}>
            <Button className="flex-1 h-16">0</Button>
            <Button className="w-16 h-16">,</Button>
            <Button className="w-16 h-16" variant="primary">
              =
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Calculator;
