import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGenerateTasksOrigin } from 'entities/generatedTask/model';
import { validateNumber } from 'shared/lib';
import { Heading } from 'shared/ui/Heading';
import { Input } from 'shared/ui/Input';
import { KeyboardAvoidingScrollView } from 'shared/ui/KeyboardAvoidingScrollView';
import { Button } from 'shared/ui/buttons';
import { styles } from './TasksGenerator.styles';
import type {
  ScreenProps,
  TasksGeneratorStackParamList,
} from 'navigation/navigation.types';

export type TasksGeneratorProps = ScreenProps<
  TasksGeneratorStackParamList,
  'GenerateTasks'
>;

const DEFAULT_TASKS_NUMBER = 10000;
const MINIMAL_TASKS_NUMBER = 1;

const handleGeneratePressError = () => {
  Alert.alert('Something went wrong', 'Try again later', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'OK' },
  ]);
};

const handleInvalidTasksNumber = () => {
  Alert.alert(
    `Only integers greater than ${MINIMAL_TASKS_NUMBER} are allowed`,
    undefined,
    [{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
  );
};

export const TasksGenerator = ({ navigation }: TasksGeneratorProps) => {
  const insets = useSafeAreaInsets();

  const [tasksNumber, setTasksNumber] = useState(DEFAULT_TASKS_NUMBER);

  const [generateTasks, { isLoading }] = useGenerateTasksOrigin();

  const getContainerInsets = () => {
    const { paddingTop, paddingHorizontal } = styles.page;

    return {
      paddingTop: insets.top + paddingTop,
      paddingLeft: insets.left + paddingHorizontal,
      paddingRight: insets.right + paddingHorizontal,
    };
  };

  const handleGeneratePress = async () => {
    const isValidNumber = validateNumber(tasksNumber, {
      onlyInteger: true,
      min: MINIMAL_TASKS_NUMBER,
    });

    if (!isValidNumber) {
      handleInvalidTasksNumber();
      return;
    }

    try {
      await generateTasks(tasksNumber).unwrap();
      navigation.navigate('GeneratedTasksOverview');
    } catch (error) {
      handleGeneratePressError();
    }
  };

  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={[styles.page, getContainerInsets()]}
    >
      <Heading level="h2" style={styles.heading}>
        Do you want{'\n'} to generate tasks?
      </Heading>

      <Input
        type="secondary"
        label="Numbers of tasks"
        keyboardType="numeric"
        value={String(tasksNumber)}
        onChangeText={(value) => setTasksNumber(Number(value))}
      />

      <Button
        size="lg"
        type="secondary"
        title="Generate"
        isLoading={isLoading}
        buttonBoxStyle={styles.button}
        onPress={handleGeneratePress}
      />
    </KeyboardAvoidingScrollView>
  );
};
