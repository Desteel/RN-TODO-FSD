import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TasksGenerator, GeneratedTasksOverview } from '../pages/generator';
import { stackScreenOptions } from './Router.constants';
import type { TasksGeneratorStackParamList } from '../navigation.types';

const TasksGeneratorStack =
  createNativeStackNavigator<TasksGeneratorStackParamList>();

const generateTasksOptions = { title: 'Generator' };
const generatedTasksOverviewOptions = { title: 'Generated tasks' };

export function TasksGeneratorStackScreen() {
  return (
    <TasksGeneratorStack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName="GenerateTasks"
    >
      <TasksGeneratorStack.Screen
        name="GenerateTasks"
        component={TasksGenerator}
        options={generateTasksOptions}
      />
      <TasksGeneratorStack.Screen
        name="GeneratedTasksOverview"
        component={GeneratedTasksOverview}
        options={generatedTasksOverviewOptions}
      />
    </TasksGeneratorStack.Navigator>
  );
}
