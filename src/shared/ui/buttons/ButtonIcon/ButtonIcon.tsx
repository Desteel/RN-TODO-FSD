import React, { type ReactNode } from 'react';
import {
  View,
  type StyleProp,
  type ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'shared/theme';
import { getBaseButtonProps } from '../buttons.utils';
import { styles } from './ButtonIcon.styles';

export type ButtonIconProps = {
  label: string;
  icon: ReactNode;
} & Partial<{
  onPress: () => void;
  buttonBoxStyle: StyleProp<ViewStyle>;
}>;

export const ButtonIcon = (props: ButtonIconProps) => {
  const { label, buttonBoxStyle, icon, onPress } = props;
  const baseButtonProps = getBaseButtonProps(props);

  const {
    colors: { background },
  } = useTheme();

  return (
    <View
      style={[
        styles.box,
        { backgroundColor: background.primary },
        buttonBoxStyle,
      ]}
    >
      <TouchableOpacity
        accessibilityLabel={label}
        onPress={onPress}
        style={styles.button}
        {...baseButtonProps}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};
