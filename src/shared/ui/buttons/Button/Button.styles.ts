import { StyleSheet } from 'react-native';
import {
  shape,
  fontSize,
  type Size,
  type ThemeType,
  type Theme,
  iconSize,
} from 'shared/theme';
import type { CircularProgressProps } from 'shared/ui/icons';

export type ButtonSize = Size<'lg' | 'md'>;

const dimensionsStyles = {
  button: {
    lg: { paddingVertical: 16, paddingHorizontal: 24, gap: 5 },
    md: { paddingVertical: 4, paddingHorizontal: 18, gap: 3 },
  },
};

export const getDimensionsStyles = (size: ButtonSize) => {
  return StyleSheet.create({
    box: {
      borderRadius: shape.borderRadius[size],
    },
    button: dimensionsStyles.button[size],
    title: {
      fontSize: fontSize.body[size],
    },
  });
};

export const getThemeStyles = (
  { colors: { primary, secondary, additional, text } }: Theme,
  type: ThemeType,
) => {
  switch (type) {
    case 'primary':
    default: {
      return StyleSheet.create({
        box: { backgroundColor: additional.main },
        button: { backgroundColor: primary.main },
        title: { color: primary.contrast },
      });
    }

    case 'secondary': {
      return StyleSheet.create({
        box: { backgroundColor: additional.main },
        button: { backgroundColor: secondary.main },
        title: { color: secondary.contrast },
      });
    }

    case 'tertiary': {
      return StyleSheet.create({
        box: { backgroundColor: additional.main },
        button: { backgroundColor: additional.main },
        title: { color: text.primary },
      });
    }
  }
};

export const getCircularProgressStyles = (
  { colors: { primary, secondary, additional, text } }: Theme,
  type: ThemeType,
): Pick<
  Required<CircularProgressProps>,
  'progressColor' | 'backgroundColor'
> => {
  switch (type) {
    case 'primary':
    default: {
      return {
        progressColor: additional.main,
        backgroundColor: secondary.contrast,
      };
    }

    case 'secondary': {
      return {
        progressColor: secondary.contrast,
        backgroundColor: primary.contrast,
      };
    }

    case 'tertiary': {
      return {
        progressColor: additional.main,
        backgroundColor: text.primary,
      };
    }
  }
};

export const styles = StyleSheet.create({
  title: {
    lineHeight: iconSize.md,
    fontWeight: 'bold',
  },
  box: {
    overflow: 'hidden',
  },
  button: {
    justifyContent: 'center',
  },
});
