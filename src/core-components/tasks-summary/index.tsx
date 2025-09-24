import Badge from '@/components/todo-list/badge';
import Text from '@/components/todo-list/text';

export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas criadas</Text>
        <Badge variant="secondary">5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Concluídas</Text>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </>
  );
}
