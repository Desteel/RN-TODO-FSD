import { MMKVLoader } from 'react-native-mmkv-storage';
import { debugStorage } from './persistence.debug';
import type { Storage } from 'shared/kernel';

export type PersistentStorageOptions = Partial<{
  withEncryption: boolean;
}>;

export const createPersistentStorage = (
  id: string,
  { withEncryption }: PersistentStorageOptions = {},
): Storage => {
  let loader = new MMKVLoader().withInstanceID(id);
  if (withEncryption) {
    loader = loader.withEncryption();
  }
  const storage = loader.initialize();
  debugStorage(storage);

  return {
    setItem: async (key, value) => {
      storage.setString(key, value);
      return Promise.resolve();
    },
    getItem: async (key) => {
      const value = storage.getString(key);
      return Promise.resolve(value);
    },
    removeItem: async (key) => {
      storage.removeItem(key);
      return Promise.resolve();
    },
  };
};
