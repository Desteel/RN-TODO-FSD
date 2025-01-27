import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const [INITIAL_SCALE, ACTIVE_SCALE] = [1, 2] as const;

export type UseAnimatedScaleProps = {
  isActive?: boolean;
};

export const useAnimatedScale = ({ isActive }: UseAnimatedScaleProps) => {
  const scale = useSharedValue<number>(INITIAL_SCALE);

  useEffect(() => {
    scale.value = withSpring(isActive ? ACTIVE_SCALE : INITIAL_SCALE);
  }, [isActive, scale]);

  return useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
};
