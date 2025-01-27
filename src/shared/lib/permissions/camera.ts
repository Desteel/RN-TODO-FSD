import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { handleBlockedPermissionStatus } from './lib';

const cameraPermissionKey = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  default: PERMISSIONS.ANDROID.CAMERA,
});

export const withCameraPermissions = <
  Args extends unknown[],
  Result extends unknown = void,
>(
  fn: (...args: Args) => Promise<Result> | Result,
) => {
  return async (...args: Args) => {
    const permissionStatus = await request(cameraPermissionKey);

    switch (permissionStatus) {
      case 'blocked': {
        handleBlockedPermissionStatus('Grant permissions to use the camera');
        break;
      }

      default: {
        return await fn(...args);
      }
    }
  };
};
