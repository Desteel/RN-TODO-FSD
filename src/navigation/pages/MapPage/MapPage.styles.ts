import { StyleSheet } from 'react-native';

export const MAP_OFFSET = 18;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -MAP_OFFSET,
  },
  taskInfo: {
    padding: 15,
    gap: 16,
  },
  /**
   * MapView specific
   */
  mapPadding: {
    top: MAP_OFFSET,
  },
});
