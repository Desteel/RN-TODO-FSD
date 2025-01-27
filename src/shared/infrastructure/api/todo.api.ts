import { z } from 'zod';
import { createURL } from './api';
import { createApiError } from './lib';

// https://dummyjson.com/docs/todos

const todoSchema = z.object({
  id: z.number(),
  todo: z.string(),
});

const todosSchema = z.object({
  todos: z.array(todoSchema),
});

export type TodosDTO = z.infer<typeof todosSchema>;

export type GetTodosPayload = {
  limit: number | StringNumber;
};

export const getTodos = async ({
  limit,
}: GetTodosPayload): Promise<TodosDTO> => {
  try {
    const response = await fetch(createURL(`todos?limit=${limit}`));
    const data = await response.json();

    return todosSchema.parse(data);
  } catch (error) {
    throw createApiError(error);
  }
};
