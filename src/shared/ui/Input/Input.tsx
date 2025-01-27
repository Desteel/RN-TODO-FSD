import React from 'react';
import {
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { useTheme, type ThemeType } from 'shared/theme';
import { StyledText } from '../StyledText';
import { styles, getThemeStyles } from './Input.styles';

export type InputProps = Omit<TextInputProps, 'style'> &
  Partial<{
    label: string;
    type: ThemeType<'primary' | 'secondary'>;
    hasError: boolean;
    containerStyle: StyleProp<ViewStyle>;
  }>;

export const Input = ({
  label,
  type = 'primary',
  containerStyle,
  hasError,
  ...textInputProps
}: InputProps) => {
  const themeStyles = getThemeStyles(type, useTheme());

  return (
    <View style={containerStyle}>
      {label ? (
        <StyledText style={[styles.label, themeStyles.label]}>
          {label}
        </StyledText>
      ) : null}

      <TextInput
        {...textInputProps}
        style={[styles.input, themeStyles.input, hasError && styles.inputError]}
      />
    </View>
  );
};
