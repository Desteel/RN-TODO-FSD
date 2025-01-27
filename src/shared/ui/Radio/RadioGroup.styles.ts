import { StyleSheet } from 'react-native';
import { fontSize } from 'shared/theme';

export const styles = StyleSheet.create({
  box: {
    rowGap: 8,
  },
  labelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: fontSize.body.md,
    fontWeight: 'bold',
  },
});
