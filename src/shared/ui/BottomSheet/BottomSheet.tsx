import React, { type ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  type KeyboardAvoidingViewProps,
} from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useTheme } from 'shared/theme';
import { styles } from './BottomSheet.styles';
import { DraggableBar } from './DraggableBar';
import { useDraggable } from './useDraggable';

const keyboardAvoidingViewBehavior = Platform.select<
  KeyboardAvoidingViewProps['behavior']
>({ ios: 'padding' });

export type BottomSheetProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) => {
  const {
    colors: { primary },
  } = useTheme();

  const { pan, animatedStyle } = useDraggable({ isOpen, onClose });

  return (
    <KeyboardAvoidingView
      behavior={keyboardAvoidingViewBehavior}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.sheet,
          animatedStyle,
          { backgroundColor: primary.contrast },
        ]}
      >
        <GestureDetector gesture={pan}>
          <DraggableBar />
        </GestureDetector>

        {children}
      </Animated.View>
    </KeyboardAvoidingView>
  );
};
