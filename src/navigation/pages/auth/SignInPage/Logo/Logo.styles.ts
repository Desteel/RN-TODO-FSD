import { StyleSheet } from 'react-native';
import { fontFamily } from 'shared/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1',
  },
  text: {
    fontFamily: fontFamily.logo,
  },
});
