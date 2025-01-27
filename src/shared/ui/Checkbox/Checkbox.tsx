import React from 'react';
import {
  Pressable,
  View,
  type AccessibilityProps,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { useTheme } from 'shared/theme';
import { StyledText } from '../StyledText';
import { CircularProgress } from '../icons';
import { styles } from './Checkbox.styles';
import { CheckboxIcon, type CheckboxIconProps } from './CheckboxIcon';

export type CheckboxProps = Omit<
  AccessibilityProps,
  'accessibilityRole' | 'accessibilityState'
> &
  Partial<{
    checked: boolean;
    disabled: boolean;
    isLoading: boolean;
    title: string;
    titleStyle: StyleProp<TextStyle>;
    containerStyle: StyleProp<ViewStyle>;
    size: CheckboxIconProps['size'];
    onChange: (isChecked: boolean) => void;
  }>;

export const Checkbox = ({
  checked,
  disabled,
  isLoading,
  title,
  titleStyle,
  containerStyle,
  size = 'md',
  onChange,
  ...accessibilityProps
}: CheckboxProps) => {
  const {
    colors: { primary, additional },
  } = useTheme();

  const accessibilityState: PressableProps['accessibilityState'] = {
    busy: !!isLoading,
    checked: !!checked,
    disabled: !!disabled,
  };

  const handleChange = () => {
    if (isLoading) {
      return;
    }
    onChange?.(!!checked);
  };

  return (
    <Pressable
      {...accessibilityProps}
      hitSlop={5}
      accessibilityRole="checkbox"
      accessibilityState={accessibilityState}
      style={containerStyle}
      onPress={handleChange}
    >
      <View style={styles.labelBox}>
        {isLoading ? (
          <CircularProgress
            size="sm"
            progressColor={primary.main}
            backgroundColor={additional.contrast}
          />
        ) : (
          <CheckboxIcon size={size} active={!!checked} />
        )}

        {title ? (
          <StyledText style={[styles.title, titleStyle]}>{title}</StyledText>
        ) : null}
      </View>
    </Pressable>
  );
};
