import React, { type ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  type KeyboardAvoidingViewProps,
  type ScrollViewProps,
} from 'react-native';
import { styles } from './KeyboardAvoidingScrollView.styles';

const behavior = Platform.select<KeyboardAvoidingViewProps['behavior']>({
  ios: 'padding',
});

export type KeyboardAvoidingScrollViewProps = Omit<
  KeyboardAvoidingViewProps,
  'children' | 'behavior'
> &
  Pick<ScrollViewProps, 'contentContainerStyle'> & {
    children: ReactNode;
  };

export const KeyboardAvoidingScrollView = ({
  children,
  style,
  contentContainerStyle,
  ...props
}: KeyboardAvoidingScrollViewProps) => {
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.keyboardAvoidingView, style]}
      {...props}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="never" // Should be `never` due to the use of `useSafeAreaInsets`
        contentContainerStyle={[styles.container, contentContainerStyle]}
        alwaysBounceVertical={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
