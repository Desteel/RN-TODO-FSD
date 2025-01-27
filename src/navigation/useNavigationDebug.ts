import { useFlipper } from '@react-navigation/devtools';
import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';

export const useNavigationDebug = (
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>,
) => {
  useFlipper(navigationRef);
};
