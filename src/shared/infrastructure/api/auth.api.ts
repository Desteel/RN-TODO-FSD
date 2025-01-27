import { z } from 'zod';
import { createURL } from './api';
import { createApiError } from './lib';

// https://dummyjson.com/docs/auth

const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  token: z.string(),
});

export type UserDTO = z.infer<typeof userSchema>;

export type AuthenticatePayload = {
  username: string;
  password: string;
};

export const authenticate = async (
  payload: AuthenticatePayload,
): Promise<UserDTO> => {
  try {
    const response = await fetch(createURL('auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return userSchema.parse(data);
  } catch (error) {
    throw createApiError(error);
  }
};
