import React, { useLayoutEffect, useState } from 'react';
import { View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useTasks,
  taskRemoved,
  taskToggled,
  tasksUpdate,
  type Task,
} from 'entities/task/model';
import { Tasks, type TasksProps } from 'features/tasks';
import { useAction } from 'shared/infrastructure/store';
import { reorderItems } from 'shared/lib';
import { Filter, type FilterProps } from 'shared/ui/Filter';
import { Header } from './Header';
import { styles } from './TasksOverview.styles';
import type {
  ScreenProps,
  TasksStackParamList,
} from 'navigation/navigation.types';

const filters: FilterProps<boolean | undefined>['filters'] = [
  {
    title: 'All',
    value: undefined,
  },
  {
    title: 'Active',
    value: false,
  },
  {
    title: 'Completed',
    value: true,
  },
];
const [defaultFilter] = filters;

const usePageInsets = (): ViewStyle => {
  const insets = useSafeAreaInsets();

  const { paddingHorizontal } = styles.page;

  return {
    paddingLeft: insets.left + paddingHorizontal,
    paddingRight: insets.right + paddingHorizontal,
  };
};

const getOriginalIndex = (
  narrowIndex: number,
  narrowList: Task[],
  originalList: Task[],
) => {
  const narrowId = narrowList[narrowIndex].id;
  return originalList.findIndex(({ id }) => id === narrowId);
};

export type TasksOverviewProps = ScreenProps<
  TasksStackParamList,
  'TasksOverview'
>;

export const TasksOverview = ({ navigation }: TasksOverviewProps) => {
  const pageInsets = usePageInsets();

  const [filter, setFilter] = useState(defaultFilter);

  const { filteredTasks, allTasks } = useTasks({ isDone: filter.value });
  const tasksNumber = filteredTasks.length;

  const updateTasks = useAction(tasksUpdate);
  const removeTask = useAction(taskRemoved);
  const toggleTask = useAction(taskToggled);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          tasksNumber={tasksNumber}
          onAddTaskPress={() => navigation.navigate('AddTask')}
        />
      ),
    });
  }, [navigation, tasksNumber]);

  const handleDragEnd: TasksProps['onDragEnd'] = ({ from, to }) => {
    const originalFrom = getOriginalIndex(from, filteredTasks, allTasks);
    const originalTo = getOriginalIndex(to, filteredTasks, allTasks);

    updateTasks(
      reorderItems({
        sortedItems: allTasks,
        from: originalFrom,
        to: originalTo,
      }),
    );
  };

  const goToEditTask: TasksProps['onPressEdit'] = (taskId) => {
    navigation.navigate('EditTask', { taskId });
  };

  return (
    <View style={[styles.page, pageInsets]}>
      <Filter
        filters={filters}
        selectedFilter={filter}
        onSelect={setFilter}
        containerStyle={styles.filter}
      />

      <Tasks
        tasks={filteredTasks}
        onDragEnd={handleDragEnd}
        onCheckChange={toggleTask}
        onPressRemove={removeTask}
        onPressEdit={goToEditTask}
      />
    </View>
  );
};
