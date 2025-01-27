import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'shared/theme';
import { StyledText } from '../StyledText';
import { styles } from './EmptyPlacePlaceholder.styles';

export type EmptyPlacePlaceholderProps = {
  description: string;
};

export const EmptyPlacePlaceholder = ({
  description,
}: EmptyPlacePlaceholderProps) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <View style={styles.container}>
      <StyledText style={[styles.description, { color: text.secondary }]}>
        {description}
      </StyledText>
    </View>
  );
};
