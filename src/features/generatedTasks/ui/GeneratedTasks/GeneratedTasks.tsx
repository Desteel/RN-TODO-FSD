import React from 'react';
import { FlatList, type FlatListProps } from 'react-native';
import {
  useGeneratedTasksIds,
  type GeneratedTask,
} from 'entities/generatedTask/model';
import { EmptyPlacePlaceholder } from 'shared/ui/EmptyPlacePlaceholder';
import { GeneratedTaskCard } from '../GeneratedTaskCard';
import { styles } from './GeneratedTasks.styles';

const ITEM_HEIGHT = 70;

const ListEmptyComponent = () => (
  <EmptyPlacePlaceholder description="The list is empty" />
);

const keyExtractor: FlatListProps<string>['keyExtractor'] = (id) => id;

const getItemLayout: FlatListProps<string>['getItemLayout'] = (
  _data,
  index,
) => {
  return {
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  };
};

const renderItem: FlatListProps<string>['renderItem'] = ({ item: id }) => {
  return <GeneratedTaskCard id={id} />;
};

export type GeneratedTasksProps = {
  tasks: GeneratedTask[];
} & Partial<{
  onPressRemove: (taskId: string) => void;
}>;

export const GeneratedTasks = () => {
  const tasksIds = useGeneratedTasksIds();

  return (
    <FlatList
      ListEmptyComponent={ListEmptyComponent}
      data={tasksIds}
      removeClippedSubviews
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.container}
    />
  );
};
