import { StyleSheet } from 'react-native';

const LIST_HORIZONTAL_OFFSET = 15;

export const ACTIVE_DND_SCALE = 1.06;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingBottom: 15,
  },
  listWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  list: {
    marginHorizontal: -LIST_HORIZONTAL_OFFSET,
  },
  contentContainer: {
    paddingHorizontal: LIST_HORIZONTAL_OFFSET,
  },
  item: {
    marginBottom: 12,
  },
});
