import React from 'react';
import { fontSize, type HeadingLevel } from 'shared/theme';
import { StyledText } from '../StyledText';
import { styles } from './Heading.styles';
import type { TextProps } from 'react-native';

export type HeadingProps = TextProps &
  Partial<{
    level: HeadingLevel;
  }>;

export const Heading = ({ level = 'h1', style, ...props }: HeadingProps) => {
  return (
    <StyledText
      {...props}
      accessibilityRole="header"
      style={[style, styles.heading, { fontSize: fontSize.heading[level] }]}
    />
  );
};
