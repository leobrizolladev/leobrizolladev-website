'use client';

import PlusIcon from '@/assets/icons/plus.svg';
import Button from '@/components/todo-list/button';
import useTask from '@/hooks/use-task';
import useTasks from '@/hooks/use-tasks';
import { type Task, TaskState } from '@/models/task';
import TaskItem from '../task-item';

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTasks } = useTask();

  function handleNewTask() {
    prepareTasks();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
