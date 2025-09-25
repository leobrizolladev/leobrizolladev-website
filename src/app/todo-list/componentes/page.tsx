import PlusIcon from '@/assets/icons/plus.svg';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import Badge from '@/components/todo-list/badge';
import Button from '@/components/todo-list/button';
import ButtonIcon from '@/components/todo-list/button-icon';
import Card from '@/components/todo-list/card';
import Container from '@/components/todo-list/container';
import Icon from '@/components/todo-list/icon';
import InputCheckbox from '@/components/todo-list/input-checkbox';
import InputText from '@/components/todo-list/input-text';
import Skeleton from '@/components/todo-list/skeleton';
import Text from '@/components/todo-list/text';

export default function TodoList() {
  return (
    <Container size={'md'}>
      <div className={`grid gap-3`}>
        <Text variant="body-sm-bold">Hello World</Text>
        <Text variant="body-md">Hello World</Text>
        <Text variant="body-md-bold">Hello World</Text>

        <hr />

        <Icon svg={TrashIcon} className="fill-amber-500" />
        <Icon svg={SpinnerIcon} className="fill-blue-500 animate-spin" />

        <hr />

        <div className="flex gap-1">
          <Badge variant={'secondary'}>5</Badge>
          <Badge variant={'primary'}>2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <hr />

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
          <Button icon={PlusIcon} handling>
            Criando...
          </Button>
        </div>

        <hr />

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} variant={'primary'} />
          <ButtonIcon icon={TrashIcon} variant={'secondary'} />
          <ButtonIcon icon={TrashIcon} variant={'tertiary'} />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <hr />

        <div>
          <InputText />
        </div>

        <hr />

        <div className="flex gap-1">
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <hr />

        <div>
          <Card size="md">Card test text</Card>
        </div>

        <hr />

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
}
