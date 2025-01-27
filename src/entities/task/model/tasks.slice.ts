import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Comparer,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { createBaseSelector } from 'shared/infrastructure/store';
import { type Storage } from 'shared/kernel';
import { generateID } from 'shared/lib';
import type { EditableTaskData, Task } from './tasks.types';

export const TASKS_REDUCER_NAME = 'tasks';

const reverseByOrder: Comparer<Task> = (a, b) => {
  return b.order - a.order;
};

const tasksAdapter = createEntityAdapter<Task>({
  sortComparer: reverseByOrder,
});

const initialState = tasksAdapter.getInitialState();

export const tasksAdapterSelectors = tasksAdapter.getSelectors();
export const tasksBaseSelector =
  createBaseSelector<typeof initialState>(TASKS_REDUCER_NAME);

const tasksSlice = createSlice({
  name: TASKS_REDUCER_NAME,
  initialState,
  reducers: {
    tasksSet: tasksAdapter.setAll,

    tasksUpdate: tasksAdapter.upsertMany,

    taskAdded: (tasks, { payload }: PayloadAction<EditableTaskData>) => {
      tasksAdapter.addOne(tasks, {
        id: generateID(),
        order: tasks.ids.length,
        done: false,
        ...payload,
      });
    },

    taskUpdated: (
      tasks,
      {
        payload: { id, data },
      }: PayloadAction<{
        id: Task['id'];
        data: EditableTaskData;
      }>,
    ) => {
      const task = tasksAdapterSelectors.selectById(tasks, id);
      if (task) {
        tasksAdapter.updateOne(tasks, {
          id,
          changes: data,
        });
      }
    },

    taskToggled: (tasks, { payload: id }: PayloadAction<Task['id']>) => {
      const task = tasksAdapterSelectors.selectById(tasks, id);
      if (task) {
        tasksAdapter.updateOne(tasks, {
          id,
          changes: {
            done: !task.done,
          },
        });
      }
    },

    taskRemoved: tasksAdapter.removeOne,
  },
});

export const createPersistentTasksReducer = (storage: Storage) => {
  return persistReducer({ key: tasksSlice.name, storage }, tasksSlice.reducer);
};

export const {
  actions: {
    tasksSet,
    tasksUpdate,
    taskAdded,
    taskUpdated,
    taskToggled,
    taskRemoved,
  },
} = tasksSlice;
