import { delay } from '@/helpers/utils';
import { TASKS_KEY, type Task, TaskState } from '@/models/task';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  function prepareTasks() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: '',
        state: TaskState.Creating,
        concluded: false,
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task['title'] }) {
    setIsUpdatingTask(true);

    await delay(1000);

    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          state: TaskState.Created,
          ...payload,
        };
      } else {
        return task;
      }
    });

    setTasks(newTask);
    setIsUpdatingTask(false);
  }

  function updateTaskStatus(
    id: string,
    payload: { concluded: Task['concluded'] }
  ) {
    const newTaskStatus = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...payload };
      } else {
        return task;
      }
    });

    setTasks(newTaskStatus);
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);

    const newTasksList = tasks.filter((task) => task.id !== id);
    setTasks(newTasksList);
    setIsDeletingTask(false);
  }

  return {
    prepareTasks,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
