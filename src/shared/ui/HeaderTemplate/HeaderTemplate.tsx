import React, { type ReactNode } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { shape, useTheme } from 'shared/theme';
import { styles } from './HeaderTemplate.styles';

export type HeaderTemplateProps = {
  children: ReactNode;
} & Partial<{
  style: StyleProp<ViewStyle>;
}>;

export const HeaderTemplate = ({ children, style }: HeaderTemplateProps) => {
  const {
    colors: { primary },
  } = useTheme();

  const insets = useSafeAreaInsets();
  const { container } = styles;
  const borderRadius = shape.borderRadius.xlg;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: primary.main,
          paddingLeft: container.padding + insets.left,
          paddingRight: container.padding + insets.right,
          paddingTop: container.paddingTop + insets.top,
          borderBottomLeftRadius: borderRadius,
          borderBottomEndRadius: borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
