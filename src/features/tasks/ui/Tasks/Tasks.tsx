import React from 'react';
import { View, type FlatListProps, TouchableOpacity } from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
  type DraggableFlatListProps,
} from 'react-native-draggable-flatlist';
import { useTheme } from 'shared/theme';
import { EmptyPlacePlaceholder } from 'shared/ui/EmptyPlacePlaceholder';
import { StyledText } from 'shared/ui/StyledText';
import { TaskCard, type TaskCardProps } from './TaskCard';
import { ACTIVE_DND_SCALE, styles } from './Tasks.styles';
import type { Task } from 'entities/task/model';

export type TasksProps = {
  tasks: Task[];
} & Partial<{
  onDragEnd: DraggableFlatListProps<Task>['onDragEnd'];
  onCheckChange: TaskCardProps['onCheckChange'];
  onPressEdit: (taskId: string) => void;
  onPressRemove: (taskId: string) => void;
}>;

const keyExtractor: FlatListProps<Task>['keyExtractor'] = ({ id }) => {
  return id;
};

const ListEmptyComponent = () => (
  <EmptyPlacePlaceholder description="The list is empty" />
);

export const Tasks = ({
  tasks,
  onDragEnd,
  onCheckChange,
  onPressEdit,
  onPressRemove,
}: TasksProps) => {
  const {
    colors: { text },
  } = useTheme();

  const renderItem: DraggableFlatListProps<Task>['renderItem'] = ({
    item,
    drag,
    isActive,
  }) => (
    <ScaleDecorator activeScale={ACTIVE_DND_SCALE}>
      <TouchableOpacity
        style={styles.item}
        onLongPress={drag}
        disabled={isActive}
      >
        <TaskCard
          onCheckChange={onCheckChange}
          onPressEdit={onPressEdit}
          onPressRemove={onPressRemove}
          {...item}
        />
      </TouchableOpacity>
    </ScaleDecorator>
  );

  return (
    <View style={styles.container}>
      <StyledText style={[styles.title, { color: text.secondary }]}>
        Your Tasks
      </StyledText>

      <View style={styles.listWrapper}>
        <DraggableFlatList<Task>
          ListEmptyComponent={ListEmptyComponent}
          data={tasks}
          onDragEnd={onDragEnd}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};
