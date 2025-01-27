import React, { type ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from 'shared/theme';
import { styles } from './ScreenWrapper.styles';

export type ScreenWrapperProps = {
  children: ReactNode;
};

export function ScreenWrapper({ children }: ScreenWrapperProps) {
  const {
    colors: { background },
    native,
  } = useTheme();

  return (
    <GestureHandlerRootView
      style={[styles.container, { backgroundColor: background.primary }]}
    >
      <StatusBar
        barStyle={native.statusBarStyle}
        backgroundColor="transparent"
        translucent
      />
      {children}
    </GestureHandlerRootView>
  );
}
