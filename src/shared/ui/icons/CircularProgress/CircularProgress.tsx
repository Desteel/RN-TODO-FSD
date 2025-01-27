import React from 'react';
import { type ColorValue } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg from 'react-native-svg';
import { styles } from './CircularProgress.styles';
import { ProgressCircle } from './ProgressCircle';
import { useAnimatedRotation } from './useAnimatedRotation';
import type { Size } from 'shared/theme';

const dimensions = {
  md: 24,
  sm: 16,
};

export type CircularProgressProps = Partial<{
  size: Size<'md' | 'sm'>;
  progressColor: ColorValue;
  backgroundColor: ColorValue;
}>;

export const CircularProgress = ({
  size = 'md',
  progressColor,
  backgroundColor,
}: CircularProgressProps) => {
  const dimension = dimensions[size];

  const rotationStyle = useAnimatedRotation();

  return (
    <Animated.View style={[styles.box, rotationStyle, { width: dimension }]}>
      <Svg width={dimension} height={dimension} viewBox="0 0 24 24" fill="none">
        <ProgressCircle stroke={backgroundColor} />
        <ProgressCircle
          stroke={progressColor}
          strokeDasharray={62.83}
          strokeDashoffset={37.68}
        />
      </Svg>
    </Animated.View>
  );
};
