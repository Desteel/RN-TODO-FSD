import React from 'react';
import {
  Image,
  View,
  type ImageProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { styles } from './Photo.styles';
import { PhotoBackground } from './PhotoBackground';

export type PhotoProps = Pick<ImageProps, 'source' | 'src' | 'srcSet' | 'alt'> &
  Partial<{
    containerStyle: StyleProp<ViewStyle>;
  }>;

export const Photo = ({
  containerStyle,
  source,
  src,
  srcSet,
  alt,
}: PhotoProps) => {
  const hasSrc = source || src || alt;

  return (
    <View style={[styles.container, containerStyle]}>
      <PhotoBackground width="100%" height="100%" />
      {hasSrc ? (
        <Image
          style={styles.photo}
          resizeMode="cover"
          source={source}
          src={src}
          srcSet={srcSet}
          alt={alt}
        />
      ) : null}
    </View>
  );
};
