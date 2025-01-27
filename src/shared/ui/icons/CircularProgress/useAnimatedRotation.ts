import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type WithTimingConfig,
} from 'react-native-reanimated';
import { useEffectOnce } from 'shared/lib';

const animationConfig: WithTimingConfig = {
  duration: 1000,
  easing: Easing.linear,
};

export const useAnimatedRotation = () => {
  const rotation = useSharedValue(0);

  useEffectOnce(() => {
    rotation.value = withRepeat(withTiming(1, animationConfig), -1);
  });

  return useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 360}deg` }],
  }));
};
