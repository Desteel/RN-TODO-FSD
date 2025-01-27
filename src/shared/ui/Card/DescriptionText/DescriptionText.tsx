import React from 'react';
import { useTheme } from 'shared/theme';
import { StyledText, type StyledTextProps } from 'shared/ui/StyledText';
import { styles } from './DescriptionText.styles';

export type DescriptionTextProps = Pick<StyledTextProps, 'children'>;

export const DescriptionText = ({ children }: DescriptionTextProps) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <StyledText style={[styles.description, { color: text.secondary }]}>
      {children}
    </StyledText>
  );
};
