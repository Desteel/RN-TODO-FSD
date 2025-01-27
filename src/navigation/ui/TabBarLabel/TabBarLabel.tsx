import React from 'react';
import { useTheme } from 'shared/theme';
import { StyledText } from 'shared/ui/StyledText';
import { styles } from './TabBarLabel.styles';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const TabBarLabel: BottomTabNavigationOptions['tabBarLabel'] = ({
  focused,
  children,
}) => {
  const { colors } = useTheme();

  const higlightStyle = focused ? { color: colors.primary.main } : undefined;

  return (
    <StyledText style={[styles.tabBarLabel, higlightStyle]}>
      {children}
    </StyledText>
  );
};
