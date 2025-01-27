import { useEffect, useRef } from 'react';
import { useUser } from 'entities/authentication/model';
import {
  createPersistentStorage,
  type PersistentStorageOptions,
} from 'shared/infrastructure/persistence';
import { type Storage } from 'shared/kernel';
import { APPLICATION_NAME } from 'shared/lib';
import { injectReducers, persistor } from '../store';
import { createPersistentReducers } from './createPersistentReducers';

const STORAGE_KEY_VERSION = 0;

const createStorageKey = (userID: string) => {
  return `${APPLICATION_NAME}_v${STORAGE_KEY_VERSION}_${userID}`;
};

const persistentStorageOptions: PersistentStorageOptions = {
  withEncryption: true,
};

export const useOwnStorage = () => {
  const user = useUser();
  const storageRef = useRef<Storage>();

  useEffect(() => {
    if (!user) {
      return;
    }

    const storageKey = createStorageKey(user.id);
    storageRef.current = createPersistentStorage(
      storageKey,
      persistentStorageOptions,
    );

    injectReducers(createPersistentReducers(storageRef.current));

    persistor.persist();
  }, [user]);
};
