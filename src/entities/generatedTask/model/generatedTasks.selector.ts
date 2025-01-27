import { useSelector, type StoreState } from 'shared/infrastructure/store';
import {
  generatedTasksAdapterSelectors,
  generatedTasksBaseSelector,
} from './generatedTasks.slice';
import type { GeneratedTask } from './generatedTasks.types';

const selectGeneratedTasksIds = (state: StoreState) => {
  return generatedTasksAdapterSelectors.selectIds(
    generatedTasksBaseSelector(state),
  );
};

const selectGeneratedTask = (state: StoreState, id: GeneratedTask['id']) => {
  return generatedTasksAdapterSelectors.selectById(
    generatedTasksBaseSelector(state),
    id,
  );
};

export const useGeneratedTasksIds = () => {
  return useSelector(selectGeneratedTasksIds);
};

export const useGeneratedTask = (id: GeneratedTask['id']) => {
  return useSelector((state) => selectGeneratedTask(state, id));
};
