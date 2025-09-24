'use client';

import CheckIcon from '@/assets/icons/check.svg';
import PencilIcon from '@/assets/icons/pencil.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import XIcon from '@/assets/icons/x.svg';
import ButtonIcon from '@/components/todo-list/button-icon';
import Card from '@/components/todo-list/card';
import InputCheckbox from '@/components/todo-list/input-checkbox';
import InputText from '@/components/todo-list/input-text';
import Text from '@/components/todo-list/text';
import { useState } from 'react';

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1 text-gray-400-todo">
            🛒 Fazer compras da semana
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
