import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TasksOverview, AddTask, EditTask } from '../pages/tasks';
import { stackScreenOptions } from './Router.constants';
import type { TasksStackParamList } from '../navigation.types';

const TasksStack = createNativeStackNavigator<TasksStackParamList>();

const tasksOverviewOptions = { title: 'Tasks' };
const addTaskOptions = { title: 'Add new task' };
const editTaskOptions = { title: 'Edit task' };

export function TasksStackScreen() {
  return (
    <TasksStack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName="TasksOverview"
    >
      <TasksStack.Screen
        name="TasksOverview"
        component={TasksOverview}
        options={tasksOverviewOptions}
      />
      <TasksStack.Screen
        name="AddTask"
        component={AddTask}
        options={addTaskOptions}
      />
      <TasksStack.Screen
        name="EditTask"
        component={EditTask}
        options={editTaskOptions}
      />
    </TasksStack.Navigator>
  );
}
