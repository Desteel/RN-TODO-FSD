import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { handleBlockedPermissionStatus } from './lib';

const locationPermissionKey = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  default: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
});

export const withLocationPermissions = <
  Args extends unknown[],
  Result extends unknown = void,
>(
  fn: (...args: Args) => Promise<Result> | Result,
) => {
  return async (...args: Args) => {
    const permissionStatus = await request(locationPermissionKey);

    switch (permissionStatus) {
      case 'blocked': {
        handleBlockedPermissionStatus('Grant permissions to use geolocation');
        break;
      }

      default: {
        return await fn(...args);
      }
    }
  };
};
