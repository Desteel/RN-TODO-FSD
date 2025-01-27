import { createSelector } from '@reduxjs/toolkit';
import { useSelector, type StoreState } from 'shared/infrastructure/store';
import { createFilterBuilder, isNil } from 'shared/lib';
import { tasksAdapterSelectors, tasksBaseSelector } from './tasks.slice';
import type { Task } from './tasks.types';

export type SelectTasksOptions = Partial<{
  isDone: boolean;
  hasLocation: boolean;
}>;

const selectFilterOptions = (
  _state: StoreState,
  options?: SelectTasksOptions,
) => {
  return options;
};

const getFilteredTasks = (
  tasksEntity: ReturnType<typeof tasksBaseSelector>,
  { isDone, hasLocation }: SelectTasksOptions = {},
) => {
  const tasks = tasksAdapterSelectors.selectAll(tasksEntity);

  const filterBuilder = createFilterBuilder<Task>();
  if (!isNil(isDone)) {
    filterBuilder.addFilter(({ done }) => done === isDone);
  }
  if (!isNil(hasLocation)) {
    filterBuilder.addFilter(
      ({ location }) => !!(location?.address || location?.coordinate),
    );
  }
  const filter = filterBuilder.build();

  return {
    filteredTasks: filter ? tasks.filter(filter) : tasks,
    allTasks: tasks,
  };
};

const selectTasks = createSelector(
  [tasksBaseSelector, selectFilterOptions],
  getFilteredTasks,
);

const selectTask = (state: StoreState, id: Task['id']) => {
  return tasksAdapterSelectors.selectById(tasksBaseSelector(state), id);
};

export const useTasks = (options: SelectTasksOptions) => {
  return useSelector((state) => selectTasks(state, options));
};

export const useTask = (id: Task['id']) => {
  return useSelector((state) => selectTask(state, id));
};
