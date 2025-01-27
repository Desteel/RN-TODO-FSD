import {
  BottomTabBar as DefaultBottomTabBar,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React, { type ComponentProps } from 'react';

export const hideTabBarSym = Symbol('hideTabBar');

export type BottomTabBarProps = ComponentProps<typeof DefaultBottomTabBar>;

export type BottomTabBarNavigationOptions = BottomTabNavigationOptions &
  Partial<{
    [hideTabBarSym]: boolean;
  }>;

/**
 * See {@link https://github.com/react-navigation/react-navigation/blob/main/packages/bottom-tabs/src/views/BottomTabBar.tsx#L148 BottomTabBar implementation}
 */
const getOptions = (
  props: BottomTabBarProps,
): BottomTabBarNavigationOptions => {
  const { state } = props;

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = props.descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  return focusedOptions;
};

export const BottomTabBar = (props: BottomTabBarProps) => {
  const options = getOptions(props);

  if (options[hideTabBarSym]) {
    return null;
  }
  return <DefaultBottomTabBar {...props} />;
};
