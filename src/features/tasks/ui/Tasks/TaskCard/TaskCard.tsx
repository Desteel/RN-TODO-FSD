import React, { useState } from 'react';
import { View, type TextStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { getLocationText, isNil } from 'shared/lib';
import { useTheme } from 'shared/theme';
import { Card } from 'shared/ui/Card';
import { Checkbox } from 'shared/ui/Checkbox';
import { ButtonIcon } from 'shared/ui/buttons';
import { MapDot, Pen, Trash } from 'shared/ui/icons';
import { useStatusColor } from 'shared/ui/useStatusColor';
import { styles } from './TaskCard.styles';
import type { Task } from 'entities/task/model';

export type TaskCardProps = Omit<Task, 'photoSource'> &
  Partial<{
    onCheckChange: (taskId: string, checked: boolean) => void;
    onPressEdit: (taskId: string) => void;
    onPressRemove: (taskId: string) => void;
  }>;

const useTitleStyle = ({
  status,
  done,
}: Pick<TaskCardProps, 'status' | 'done'>) => {
  const {
    colors: { text },
  } = useTheme();
  const statusColor = useStatusColor(status);

  const [isHiglighted, setIsHiglighted] = useState(false);

  const toggleTitleHighlight = () => {
    if (isNil(status)) {
      return;
    }
    setIsHiglighted((prev) => !prev);
  };

  const highlightedTitleStyle: TextStyle | undefined = isHiglighted
    ? { color: statusColor }
    : undefined;

  const checkedTitleStyle: TextStyle | undefined = done
    ? {
        textDecorationLine: 'line-through',
        textDecorationColor: text.secondary,
      }
    : undefined;

  return {
    titleStyle: [highlightedTitleStyle, checkedTitleStyle],
    toggleTitleHighlight,
  };
};

export const TaskCard = ({
  id,
  title,
  location,
  status,
  done,
  onCheckChange,
  onPressEdit,
  onPressRemove,
}: TaskCardProps) => {
  const statusColor = useStatusColor(status);
  const { titleStyle, toggleTitleHighlight } = useTitleStyle({ status, done });

  const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(toggleTitleHighlight);

  const renderBody = () => {
    if (done || !location) {
      return null;
    }

    return (
      <View style={styles.description}>
        <MapDot />
        <Card.DescriptionText>{getLocationText(location)}</Card.DescriptionText>
      </View>
    );
  };

  const renderControls = () => {
    if (done) {
      return null;
    }

    return (
      <>
        <ButtonIcon
          icon={<Trash active />}
          label="Remove"
          onPress={() => onPressRemove?.(id)}
        />
        <ButtonIcon
          icon={<Pen active />}
          label="Edit"
          onPress={() => onPressEdit?.(id)}
        />
      </>
    );
  };

  return (
    <GestureDetector gesture={doubleTap}>
      <Card
        title={title}
        marked={!!status}
        markColor={statusColor}
        titleStyle={titleStyle}
        rightSidebar={
          <Checkbox
            checked={done}
            accessibilityLabel={title}
            onChange={(checked) => onCheckChange?.(id, checked)}
          />
        }
        body={renderBody()}
        controls={renderControls()}
      />
    </GestureDetector>
  );
};
