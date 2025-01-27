import { StyleSheet } from 'react-native';
import { PHOTO_BACKGROUND_ASPECT_RATIO } from './PhotoBackground';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    aspectRatio: PHOTO_BACKGROUND_ASPECT_RATIO,
  },
  photo: StyleSheet.absoluteFillObject,
});
