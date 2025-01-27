import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { taskAdded } from 'entities/task/model';
import { TaskForm, type TaskFormProps } from 'features/taskForm';
import { useHideBottomTabBar } from 'navigation/ui';
import { useAction } from 'shared/infrastructure/store';
import type {
  ScreenProps,
  TasksStackParamList,
} from 'navigation/navigation.types';

export type TasksOverviewProps = ScreenProps<TasksStackParamList, 'AddTask'>;

export const AddTask = ({ navigation }: TasksOverviewProps) => {
  const insets = useSafeAreaInsets();
  const addTask = useAction(taskAdded);

  useHideBottomTabBar();

  const handleSavePress: TaskFormProps['onSavePress'] = (data) => {
    addTask(data);
    navigation.goBack();
  };

  return (
    <TaskForm
      onSavePress={handleSavePress}
      containerStyle={{
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    />
  );
};
