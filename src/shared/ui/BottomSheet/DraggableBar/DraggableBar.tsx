import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'shared/theme';
import { styles } from './DraggableBar.styles';

export const DraggableBar = () => {
  const {
    colors: { additional },
  } = useTheme();

  return (
    <View style={styles.bar}>
      <View style={[styles.icon, { backgroundColor: additional.contrast }]} />
    </View>
  );
};
