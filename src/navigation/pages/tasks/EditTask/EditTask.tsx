import React, { useLayoutEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { taskRemoved, taskUpdated, useTask } from 'entities/task/model';
import { TaskForm, type TaskFormProps } from 'features/taskForm';
import { useHideBottomTabBar } from 'navigation/ui';
import { useAction } from 'shared/infrastructure/store';
import { EmptyPlacePlaceholder } from 'shared/ui/EmptyPlacePlaceholder';
import { ButtonLink } from 'shared/ui/buttons';
import type {
  ScreenProps,
  TasksStackParamList,
} from 'navigation/navigation.types';

export type EditTaskProps = ScreenProps<TasksStackParamList, 'EditTask'>;

export const EditTask = ({ navigation, route }: EditTaskProps) => {
  const insets = useSafeAreaInsets();
  useHideBottomTabBar();

  const { taskId } = route.params;
  const task = useTask(taskId);

  const removeTask = useAction(taskRemoved);
  const updateTask = useAction(taskUpdated);

  const pageInsets = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingBottom: insets.bottom,
  };

  useLayoutEffect(() => {
    const handleDeletePress = () => {
      removeTask(taskId);
      navigation.goBack();
    };

    navigation.setOptions({
      headerRight: () => (
        <ButtonLink
          type="secondary"
          title="Delete"
          onPress={handleDeletePress}
        />
      ),
    });
  }, [navigation, removeTask, taskId]);

  const handleSavePress: TaskFormProps['onSavePress'] = (data) => {
    updateTask({ id: taskId, data });
    navigation.goBack();
  };

  if (task) {
    return (
      <TaskForm
        defaultData={task}
        onSavePress={handleSavePress}
        containerStyle={pageInsets}
      />
    );
  }
  return <EmptyPlacePlaceholder description="Task not found" />;
};
