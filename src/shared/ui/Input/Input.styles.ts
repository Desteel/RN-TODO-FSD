import { Platform, StyleSheet } from 'react-native';
import {
  fontFamily,
  fontSize,
  shape,
  type ThemeType,
  type Theme,
} from 'shared/theme';

export const getThemeStyles = (
  type: ThemeType,
  { colors: { primary, additional, text } }: Theme,
) => {
  if (type === 'primary') {
    return StyleSheet.create({
      input: {
        backgroundColor: primary.main,
        borderColor: additional.light,
        color: primary.contrast,
      },
      label: {
        color: text.tertiary,
      },
    });
  }
  return StyleSheet.create({
    input: {
      backgroundColor: additional.main,
      borderColor: additional.contrast,
      color: text.primary,
    },
    label: {
      color: text.secondary,
    },
  });
};

export const styles = StyleSheet.create({
  input: {
    fontFamily: fontFamily.normal,
    overflow: 'hidden',

    borderRadius: shape.borderRadius.md,
    borderWidth: 1,
    borderStyle: 'solid',

    ...Platform.select({
      android: { paddingVertical: 9 },
      default: { paddingVertical: 15 },
    }),
    paddingHorizontal: 12,
  },
  inputError: {
    borderColor: 'red',
  },
  label: {
    fontSize: fontSize.body.md,
    marginBottom: 2,
  },
});
