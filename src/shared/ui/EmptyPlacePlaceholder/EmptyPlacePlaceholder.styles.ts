import { StyleSheet } from 'react-native';
import { fontSize } from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: fontSize.body.lg,
    fontWeight: 'bold',
  },
});
