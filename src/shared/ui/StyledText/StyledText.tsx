import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';
import { styles } from './StyledText.styles';

export type StyledTextProps = TextProps;

export const StyledText = ({ style, ...props }: StyledTextProps) => {
  const textStyle = StyleSheet.compose(styles.text, style);

  return <Text {...props} style={textStyle} />;
};
