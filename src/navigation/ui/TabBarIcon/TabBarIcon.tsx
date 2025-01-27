import React, { type ComponentType } from 'react';
import {
  LogoCheck,
  Compass,
  Smile,
  type ActiveIconProps,
} from 'shared/ui/icons';
import type { RootNavigatorParamList } from '../../navigation.types';

type RouteName = keyof RootNavigatorParamList;
type IconComponent = ComponentType<ActiveIconProps>;

const TabBarIcons: Record<RouteName, IconComponent> = {
  TasksTab: LogoCheck,
  MapTab: Compass,
  GeneratorTab: Smile,
};
const DefaultIcon: IconComponent = Smile;

export type TabBarIconProps = {
  focused: boolean;
  routeName: RouteName;
};

export const TabBarIcon = ({ focused, routeName }: TabBarIconProps) => {
  const Icon = TabBarIcons[routeName] || DefaultIcon;

  return <Icon active={focused} />;
};
