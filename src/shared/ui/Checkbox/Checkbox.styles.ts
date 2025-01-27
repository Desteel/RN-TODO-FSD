import { StyleSheet } from 'react-native';
import { fontSize } from 'shared/theme';

export const styles = StyleSheet.create({
  labelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: fontSize.body.md,
    fontWeight: 'bold',
  },
});
