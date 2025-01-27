import { useEffect } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useLatestWorklet } from 'shared/lib';
import { HEIGHT } from './BottomSheet.styles';
import { useBackPress } from './useBackPress';

const DURATION = 300;
const DISTANCE_TO_CLOSE = 50;

export type UseAnimationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const useDraggable = ({ isOpen, onClose }: UseAnimationProps) => {
  const height = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    height: height.value,
  }));

  const resetPosition = useLatestWorklet(() => {
    'worklet';
    translateY.value = withTiming(0, { duration: DURATION });
  });

  const closeModal = useLatestWorklet(() => {
    'worklet';
    height.value = withTiming(HEIGHT.INITIAL, { duration: DURATION }, () => {
      resetPosition();
      runOnJS(onClose)();
    });
  });

  useEffect(() => {
    if (isOpen) {
      height.value = withTiming(HEIGHT.MAX, { duration: DURATION });
    } else {
      closeModal();
    }
  }, [isOpen, closeModal, height]);

  const pan = Gesture.Pan()
    .onUpdate(({ translationY }) => {
      if (translationY > 0) {
        translateY.value = translationY;
      }
    })
    .onEnd(({ translationY }) => {
      if (translationY > DISTANCE_TO_CLOSE) {
        closeModal();
      } else {
        resetPosition();
      }
    });

  useBackPress({ isOpen, closeModal });

  return {
    pan,
    animatedStyle,
  };
};
