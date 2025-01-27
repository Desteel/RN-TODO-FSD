import {
  useNavigation,
  type NavigationProp,
  type NavigationState,
  type ParamListBase,
} from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { APP_NAVIGATOR } from '../../navigation.constants';
import {
  hideTabBarSym,
  type BottomTabBarNavigationOptions,
} from './BottomTabBar';
import type { GenericScreenNavigation } from '../../navigation.types';

type BottomTabNavigation = NavigationProp<
  ParamListBase,
  string,
  undefined,
  NavigationState<ParamListBase>,
  BottomTabBarNavigationOptions
>;

const SHOW_TAB_BAR_OPTIONS = { [hideTabBarSym]: true };

const HIDE_TAB_BAR_OPTIONS = { [hideTabBarSym]: false };

export const useHideBottomTabBar = () => {
  const navigation = useNavigation<GenericScreenNavigation>();

  const tabNavigation = navigation.getParent<BottomTabNavigation>(
    APP_NAVIGATOR.ID,
  );

  useLayoutEffect(() => {
    tabNavigation?.setOptions(SHOW_TAB_BAR_OPTIONS);

    return () => {
      tabNavigation?.setOptions(HIDE_TAB_BAR_OPTIONS);
    };
  }, [tabNavigation]);
};
