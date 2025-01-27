import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTodos, type TodosDTO } from 'shared/infrastructure/api';
import { createBaseSelector } from 'shared/infrastructure/store';
import { generateID, getRandomInteger, getTailIndex } from 'shared/lib';
import type { GeneratedTask } from './generatedTasks.types';

export const GENERATED_TASKS_REDUCER_NAME = 'generatedTasks';

const todosToGeneratedTasks = ({ todos }: TodosDTO): GeneratedTask[] => {
  return todos.map((todo) => ({
    id: todo.id.toString(),
    title: todo.todo,
  }));
};

const generatedTasksOrigin = createApi({
  reducerPath: `${GENERATED_TASKS_REDUCER_NAME}Origin`,
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    generateTasks: builder.query<GeneratedTask[], number | StringNumber>({
      queryFn: async (tasksNumber) => {
        try {
          const todos = await getTodos({ limit: tasksNumber });
          return { data: todosToGeneratedTasks(todos) };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

const generatedTasksAdapter = createEntityAdapter<GeneratedTask>();

const initialState = generatedTasksAdapter.getInitialState();

export const generatedTasksAdapterSelectors =
  generatedTasksAdapter.getSelectors();

export const generatedTasksBaseSelector = createBaseSelector<
  typeof initialState
>(GENERATED_TASKS_REDUCER_NAME);

const generatedTasksSlice = createSlice({
  name: GENERATED_TASKS_REDUCER_NAME,
  initialState,
  reducers: {
    generatedTaskRemoved: generatedTasksAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      generatedTasksOrigin.endpoints.generateTasks.matchFulfilled,
      (state, { payload: tasksOrigin, meta }) => {
        const tasksOriginTailIndex = getTailIndex(tasksOrigin);
        const tasksToGenerateNumber = Number(meta.arg.originalArgs);

        const generatedTasks: GeneratedTask[] = Array.from({
          length: tasksToGenerateNumber,
        }).map(() => {
          const randomIndex = getRandomInteger(0, tasksOriginTailIndex);
          return {
            ...tasksOrigin[randomIndex],
            id: generateID(),
          };
        });

        generatedTasksAdapter.setAll(state, generatedTasks);
      },
    );
  },
});

export const {
  reducer: generatedTasksOriginReducer,
  middleware: generatedTasksOriginMiddleware,
  useLazyGenerateTasksQuery: useGenerateTasksOrigin,
} = generatedTasksOrigin;

export const {
  actions: { generatedTaskRemoved },
  reducer: generatedTasksReducer,
} = generatedTasksSlice;
