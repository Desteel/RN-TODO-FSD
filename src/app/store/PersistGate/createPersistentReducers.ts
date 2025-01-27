import { createPersistentTasksReducer } from 'entities/task/model';
import type { Storage } from 'shared/kernel';

export const createPersistentReducers = (storage: Storage) => {
  return {
    tasks: createPersistentTasksReducer(storage),
  };
};
