import React, { memo } from 'react';
import {
  generatedTaskRemoved,
  useGeneratedTask,
} from 'entities/generatedTask/model';
import { useAction } from 'shared/infrastructure/store';
import { Card } from 'shared/ui/Card';
import { ButtonIcon } from 'shared/ui/buttons';
import { Trash } from 'shared/ui/icons';
import { styles } from '../GeneratedTasks/GeneratedTasks.styles';

export type GeneratedTaskCardProps = {
  id: string;
};

export const GeneratedTaskCard = memo(function GeneratedTaskCard({
  id,
}: GeneratedTaskCardProps) {
  const task = useGeneratedTask(id);
  const removeGeneratedTask = useAction(generatedTaskRemoved);

  return (
    <Card
      containerStyle={styles.container}
      title={task.title}
      marked
      controls={
        <ButtonIcon
          icon={<Trash active />}
          label="Remove"
          onPress={() => removeGeneratedTask(id)}
        />
      }
    />
  );
});
