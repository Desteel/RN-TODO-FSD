import { isProductionEnv } from 'shared/config';
import type { MMKVInstance } from 'react-native-mmkv-storage';

/**
 * Safe in production mode
 */
export const debugStorage = (storage: MMKVInstance) => {
  if (isProductionEnv) {
    return;
  }
  const mmkvFlipper = require('rn-mmkv-storage-flipper').default;
  mmkvFlipper(storage);
};
