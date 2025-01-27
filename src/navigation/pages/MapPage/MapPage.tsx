import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  useTasks,
  type SelectTasksOptions,
  type Task,
} from 'entities/task/model';
import { getLocationText } from 'shared/lib';
import { useTheme } from 'shared/theme';
import { BottomSheet } from 'shared/ui/BottomSheet';
import { Heading } from 'shared/ui/Heading';
import { MapView } from 'shared/ui/MapView';
import { Photo } from 'shared/ui/Photo';
import { StyledText } from 'shared/ui/StyledText';
import { styles } from './MapPage.styles';

const tasksFilterOptions: SelectTasksOptions = {
  isDone: false,
  hasLocation: true,
};

export const MapPage = () => {
  const {
    colors: { text },
  } = useTheme();

  const [currentTask, setCurrentTask] = useState<Task>();
  const { filteredTasks } = useTasks(tasksFilterOptions);

  const initialMarkerId = filteredTasks[0]?.id;

  const clearCurrentTask = () => setCurrentTask(undefined);

  useFocusEffect(
    useCallback(() => {
      return clearCurrentTask;
    }, []),
  );

  return (
    <View style={styles.container}>
      <MapView mapPadding={styles.mapPadding} initialMarkerId={initialMarkerId}>
        {filteredTasks.map((task) => {
          const { id, location } = task;
          return location?.coordinate ? (
            <MapView.Marker
              key={id}
              identifier={id}
              isActive={currentTask?.id === id}
              coordinate={location.coordinate}
              onPress={() => setCurrentTask(task)}
            />
          ) : null;
        })}
      </MapView>

      {currentTask ? (
        <BottomSheet isOpen={!!currentTask} onClose={clearCurrentTask}>
          <ScrollView
            contentContainerStyle={styles.taskInfo}
            alwaysBounceVertical={false}
          >
            <Heading level="h3">{currentTask.title}</Heading>
            <Photo src={currentTask.photoSource} />
            <StyledText style={[{ color: text.secondary }]}>
              {currentTask.location
                ? getLocationText(currentTask.location)
                : null}
            </StyledText>
          </ScrollView>
        </BottomSheet>
      ) : null}
    </View>
  );
};
