import { StyleSheet } from 'react-native';
import { shape } from 'shared/theme';

export const HEIGHT = {
  INITIAL: 0,
  MAX: 300,
};

const borderRadius = shape.borderRadius.xlg;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheet: {
    flex: 1,
    height: HEIGHT.INITIAL,
    overflow: 'hidden',
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
});
