import React from 'react';
import { TouchableOpacity, type StyleProp, type ViewStyle } from 'react-native';
import { useTheme, type ThemeType } from 'shared/theme';
import { StyledText } from 'shared/ui/StyledText';
import { getBaseButtonProps } from '../buttons.utils';

export type ButtonLinkProps = {
  title: string;
} & Partial<{
  type: ThemeType<'primary' | 'secondary'>;
  buttonBoxStyle: StyleProp<ViewStyle>;
  onPress: () => void;
}>;

export const ButtonLink = (props: ButtonLinkProps) => {
  const { title, type, buttonBoxStyle, onPress } = props;

  const {
    colors: { primary },
  } = useTheme();

  const baseButtonProps = getBaseButtonProps(props);

  const color = (() => {
    switch (type) {
      default:
      case 'primary': {
        return primary.main;
      }

      case 'secondary': {
        return primary.contrast;
      }
    }
  })();

  return (
    <TouchableOpacity
      style={buttonBoxStyle}
      onPress={onPress}
      {...baseButtonProps}
    >
      <StyledText style={{ color }}>{title}</StyledText>
    </TouchableOpacity>
  );
};
