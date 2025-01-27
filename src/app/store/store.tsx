import {
  combineReducers,
  configureStore,
  type Reducer,
} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  authenticationReducer,
  authenticationMiddleware,
} from 'entities/authentication/model';
import {
  generatedTasksOriginMiddleware,
  generatedTasksOriginReducer,
  generatedTasksReducer,
} from 'entities/generatedTask/model';
import { isProductionEnv } from 'shared/config';
import { getDebugMiddleware } from 'shared/infrastructure/store';
import { locationMiddleware, locationReducer } from 'shared/lib';

const middleware = [
  authenticationMiddleware,
  generatedTasksOriginMiddleware,
  locationMiddleware,
];

const debugMiddleware = getDebugMiddleware();
if (debugMiddleware) {
  middleware.push(debugMiddleware);
}

const PERSISTANCE_ACTIONS = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const staticReducers = {
  authentication: authenticationReducer,
  generatedTasksOrigin: generatedTasksOriginReducer,
  generatedTasks: generatedTasksReducer,
  location: locationReducer,
};

export const store = configureStore({
  reducer: staticReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: PERSISTANCE_ACTIONS,
      },
    }).concat(middleware);
  },
  devTools: !isProductionEnv,
});

export const persistor = persistStore(store, {
  manualPersist: true,
});

export const injectReducers = (reducers: Record<string, Reducer>) => {
  const reducer: Reducer = combineReducers({
    ...staticReducers,
    ...reducers,
  });
  store.replaceReducer(reducer);
};
