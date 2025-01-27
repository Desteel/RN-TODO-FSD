import { StyleSheet } from 'react-native';
import { shape } from 'shared/theme';

const statusBorderRadius = shape.borderRadius.lg;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    paddingRight: 6,
    borderRadius: shape.borderRadius.md,
    position: 'relative',
  },
  containerWithControls: {
    paddingBottom: 6,
  },
  rightSidebar: {
    marginRight: 8,
  },
  mark: {
    position: 'absolute',
    borderTopEndRadius: statusBorderRadius,
    borderBottomEndRadius: statusBorderRadius,
    width: 3,
    height: 26,
    top: 6,
    left: 0,
  },
  main: {
    flexGrow: 1,
    rowGap: 4,
  },
  title: {
    lineHeight: 16,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
});
