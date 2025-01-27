import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SignIn } from 'features/signIn';
import { useTheme } from 'shared/theme';
import { Heading } from 'shared/ui/Heading';
import { KeyboardAvoidingScrollView } from 'shared/ui/KeyboardAvoidingScrollView';
import { Logo } from './Logo';
import { styles } from './SignInPage.styles';

export const SignInPage = () => {
  const insets = useSafeAreaInsets();

  const {
    colors: { primary, additional },
  } = useTheme();

  const getContainerInsets = () => {
    const { paddingVertical, paddingHorizontal } = styles.container;

    return {
      paddingTop: insets.top + paddingVertical,
      paddingBottom: insets.bottom + paddingVertical,
      paddingLeft: insets.left + paddingHorizontal,
      paddingRight: insets.right + paddingHorizontal,
    };
  };

  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={[styles.container, getContainerInsets()]}
      style={{ backgroundColor: primary.main }}
    >
      <Logo containerStyle={styles.heading} />

      <Heading style={[styles.heading, { color: additional.main }]}>
        Welcome
      </Heading>

      <SignIn />
    </KeyboardAvoidingScrollView>
  );
};
