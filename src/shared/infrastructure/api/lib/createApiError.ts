import { ZodError } from 'zod';
import type { ApiError } from '../ApiError';

/**
 * A primitive error creator
 */
export const createApiError = (error: unknown): ApiError => {
  const apiError: ApiError = {
    name: 'API Error',
    message: 'Unknown API Error',
  };

  if (error instanceof ZodError) {
    apiError.message = 'Invalid scheme';
    apiError.schemaError = error.issues.map((issue) => ({
      path: issue.path.join(),
      message: issue.message,
    }));
  } else if (error instanceof Error) {
    apiError.message = error.message;
  }

  return apiError;
};
