import React from 'react';
import { Marker as MarkerBase, type MapMarkerProps } from 'react-native-maps';
import Animated from 'react-native-reanimated';
import { MapDotFancyTilted } from 'shared/ui/icons';
import { styles } from './Marker.styles';
import { useAnimatedScale } from './useAnimatedScale';

export type MarkerProps = Omit<MapMarkerProps, 'children' | 'style'> &
  Partial<{
    isActive: boolean;
  }>;

export const Marker = ({ isActive, ...props }: MarkerProps) => {
  const animatedStyle = useAnimatedScale({ isActive });

  return (
    <MarkerBase {...props}>
      <Animated.View style={[styles.animatedMarker, animatedStyle]}>
        <MapDotFancyTilted />
      </Animated.View>
    </MarkerBase>
  );
};
