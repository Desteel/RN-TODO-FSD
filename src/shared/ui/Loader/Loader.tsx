import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'shared/theme';
import { CircularProgress } from 'shared/ui/icons';
import { styles } from './Loader.styles';

export const Loader = () => {
  const {
    colors: { primary, additional, secondary },
  } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: primary.main }]}>
      <CircularProgress
        progressColor={additional.main}
        backgroundColor={secondary.contrast}
      />
    </View>
  );
};
