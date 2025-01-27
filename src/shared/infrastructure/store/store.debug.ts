import { isProductionEnv } from 'shared/config';
import type { Middleware } from '@reduxjs/toolkit';

/**
 * Safe in production mode
 */
export const getDebugMiddleware = (): Middleware | undefined => {
  if (!isProductionEnv) {
    const createDebugger = require('redux-flipper').default;

    return createDebugger();
  }
};
