'use client';

import Badge from '@/components/todo-list/badge';
import Text from '@/components/todo-list/text';
import useTasks from '@/hooks/use-tasks';

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas criadas</Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {createdTasksCount}
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Concluídas</Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
