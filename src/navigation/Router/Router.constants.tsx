import { NavigationHeader } from 'navigation/ui';
import type { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ComponentProps } from 'react';

export const stackScreenOptions: ComponentProps<
  ReturnType<typeof createNativeStackNavigator>['Navigator']
>['screenOptions'] = {
  header: NavigationHeader,
};
