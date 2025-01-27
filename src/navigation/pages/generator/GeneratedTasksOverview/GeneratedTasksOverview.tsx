import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGeneratedTasksIds } from 'entities/generatedTask/model';
import { GeneratedTasks } from 'features/generatedTasks';
import { useHideBottomTabBar } from 'navigation/ui';
import { styles } from './GeneratedTasksOverview.styles';
import type {
  ScreenProps,
  TasksGeneratorStackParamList,
} from 'navigation/navigation.types';

export type TasksGeneratorProps = ScreenProps<
  TasksGeneratorStackParamList,
  'GeneratedTasksOverview'
>;

const createPageTitle = (tasksNumber: number) => {
  return `${tasksNumber} objects` as const;
};

export const GeneratedTasksOverview = ({ navigation }: TasksGeneratorProps) => {
  useHideBottomTabBar();
  const insets = useSafeAreaInsets();
  const { length: tasksNumber } = useGeneratedTasksIds();

  useLayoutEffect(() => {
    navigation.setOptions({ title: createPageTitle(tasksNumber) });
  }, [navigation, tasksNumber]);

  const getContainerInsets = () => {
    const { paddingHorizontal, paddingVertical } = styles.page;

    return {
      paddingLeft: insets.left + paddingHorizontal,
      paddingRight: insets.right + paddingHorizontal,
      paddingBottom: insets.bottom + paddingVertical,
    };
  };

  return (
    <View style={[styles.page, getContainerInsets()]}>
      <GeneratedTasks />
    </View>
  );
};
