import { Alert } from 'react-native';
import {
  launchCamera as launchImagePicker,
  type CameraOptions,
  type Callback,
} from 'react-native-image-picker';
import { withCameraPermissions } from '../permissions';

const imagePickerCallback: Callback = ({ errorCode }) => {
  if (errorCode === 'camera_unavailable') {
    Alert.alert('Camera is not available on device', undefined, [
      { text: 'OK' },
    ]);
  }
};

export type LaunchCameraOptions = Partial<{
  mediaType: CameraOptions['mediaType'];
}>;

export const launchCamera = withCameraPermissions(async function launchCamera({
  mediaType = 'photo',
}: LaunchCameraOptions = {}) {
  const { assets } = await launchImagePicker(
    {
      mediaType,
      saveToPhotos: true,
    },
    imagePickerCallback,
  );
  return assets;
});
