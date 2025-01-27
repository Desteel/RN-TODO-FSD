import React, { type ReactNode } from 'react';
import {
  View,
  type StyleProp,
  type ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme, type Size, type ThemeType } from 'shared/theme';
import { CircularProgress } from 'shared/ui/icons';
import { StyledText } from '../../StyledText';
import { getBaseButtonProps } from '../buttons.utils';
import {
  styles,
  getDimensionsStyles,
  getThemeStyles,
  getCircularProgressStyles,
} from './Button.styles';

const positionStyle = {
  left: 'row',
  right: 'row-reverse',
} as const;

type IconPosition = keyof typeof positionStyle;

const getDirection = (iconPosition: IconPosition) => {
  return positionStyle[iconPosition];
};

export type ButtonProps = {
  title: string;
} & Partial<{
  onPress: () => void;
  size: Size<'lg' | 'md'>;
  isLoading: boolean;
  icon: ReactNode;
  iconPosition: IconPosition;
  type: ThemeType;
  buttonBoxStyle: StyleProp<ViewStyle>;
}>;

export const Button = (props: ButtonProps) => {
  const {
    title,
    size = 'md',
    type = 'primary',
    iconPosition = 'left',
    isLoading,
    buttonBoxStyle,
    icon,
    onPress,
  } = props;

  const theme = useTheme();
  const baseButtonProps = getBaseButtonProps(props);

  const dimensionsStyles = getDimensionsStyles(size);
  const themeStyles = getThemeStyles(theme, type);
  const circularProgressStyles = getCircularProgressStyles(theme, type);

  const left = isLoading ? (
    <CircularProgress
      progressColor={circularProgressStyles.progressColor}
      backgroundColor={circularProgressStyles.backgroundColor}
    />
  ) : (
    icon
  );

  const handlePress = () => {
    if (!isLoading) {
      onPress?.();
    }
  };

  return (
    <View
      style={[
        styles.box,
        dimensionsStyles.box,
        themeStyles.box,
        buttonBoxStyle,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.button,
          dimensionsStyles.button,
          themeStyles.button,
          { flexDirection: getDirection(iconPosition) },
        ]}
        onPress={handlePress}
        {...baseButtonProps}
      >
        {left}
        <StyledText
          style={[styles.title, dimensionsStyles.title, themeStyles.title]}
        >
          {title}
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};
