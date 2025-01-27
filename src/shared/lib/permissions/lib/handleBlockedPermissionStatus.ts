import { Alert } from 'react-native';
import { openSettings } from 'react-native-permissions';

export const handleBlockedPermissionStatus = (
  title: string,
  message?: string,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: openSettings,
      },
    ],
    {
      cancelable: true,
    },
  );
};
