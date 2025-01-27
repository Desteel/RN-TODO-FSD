import { StyleSheet } from 'react-native';

export const DEFAULT_DIMENSIONS = {
  WIDTH: 290,
  HEIGHT: 100,
} as const;

export const PHOTO_BACKGROUND_ASPECT_RATIO =
  DEFAULT_DIMENSIONS.WIDTH / DEFAULT_DIMENSIONS.HEIGHT;

export const styles = StyleSheet.create({
  container: {
    aspectRatio: PHOTO_BACKGROUND_ASPECT_RATIO,
  },
});
