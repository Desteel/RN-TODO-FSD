import { StyleSheet } from 'react-native';
import { shape } from 'shared/theme';

export const styles = StyleSheet.create({
  bar: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 48,
    height: 5,
    borderRadius: shape.borderRadius.sm,
  },
});
