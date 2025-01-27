import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React, { type ComponentProps } from 'react';
import { useIsSignedIn } from 'entities/authentication/model';
import { PersistSuspense } from 'shared/infrastructure/store';
import { APP_NAVIGATOR } from '../navigation.constants';
import { BottomTabBar, TabBarIcon, TabBarLabel } from '../ui';
import { useNavigationDebug } from '../useNavigationDebug';
import { AuthStackScreen } from './AuthStackScreen';
import { MapStackScreen } from './MapStackScreen';
import { TasksGeneratorStackScreen } from './TasksGeneratorStackScreen';
import { TasksStackScreen } from './TasksStackScreen';
import type { RootNavigatorParamList } from '../navigation.types';
import type { StyleProp, ViewStyle } from 'react-native';

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

type TabScreenOptions = ComponentProps<
  (typeof Tab)['Navigator']
>['screenOptions'];

const tabBarIconStyle: StyleProp<ViewStyle> = { marginBottom: 5 };

const getTabScreenOptions: TabScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarIconStyle,
    tabBarIcon: ({ focused }) => {
      return <TabBarIcon focused={focused} routeName={route.name} />;
    },
    tabBarLabel: TabBarLabel,
  };
};

const tasksTabOptions = { title: 'Tasks' };
const mapTabOptions = { title: 'Map' };
const generatorTabOptions = { title: 'Generator' };

export type RouterProps = Partial<{
  onReady: () => void;
}>;

export function Router({ onReady }: RouterProps) {
  const navigationRef = useNavigationContainerRef();
  const isSignedIn = useIsSignedIn();

  useNavigationDebug(navigationRef);

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      {isSignedIn ? (
        <PersistSuspense>
          <Tab.Navigator
            id={APP_NAVIGATOR.ID}
            screenOptions={getTabScreenOptions}
            initialRouteName="TasksTab"
            tabBar={BottomTabBar}
          >
            <Tab.Screen
              name="TasksTab"
              component={TasksStackScreen}
              options={tasksTabOptions}
            />
            <Tab.Screen
              name="MapTab"
              component={MapStackScreen}
              options={mapTabOptions}
            />
            <Tab.Screen
              name="GeneratorTab"
              component={TasksGeneratorStackScreen}
              options={generatorTabOptions}
            />
          </Tab.Navigator>
        </PersistSuspense>
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
}
