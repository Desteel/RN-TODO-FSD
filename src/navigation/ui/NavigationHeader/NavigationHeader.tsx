import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'shared/theme';
import { HeaderTemplate } from 'shared/ui/HeaderTemplate';
import { Heading } from 'shared/ui/Heading';
import { ArrowRight } from 'shared/ui/icons';
import { styles } from './NavigationHeader.styles';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

export type NavigationHeaderProps = Pick<
  NativeStackHeaderProps,
  'back' | 'options' | 'navigation'
>;

export const NavigationHeader = ({
  back,
  options,
  navigation,
}: NavigationHeaderProps) => {
  const {
    colors: { primary, additional },
  } = useTheme();

  const canGoBack = !!back;

  return (
    <HeaderTemplate style={styles.container}>
      <View style={styles.column}>
        {canGoBack ? (
          <TouchableOpacity
            accessibilityLabel="Go back"
            onPress={navigation.goBack}
          >
            <ArrowRight color={primary.contrast} />
          </TouchableOpacity>
        ) : null}
      </View>

      <Heading
        style={[styles.title, styles.column, { color: additional.main }]}
        level="h3"
      >
        {options.title}
      </Heading>

      <View style={[styles.column, styles.columnEnd]}>
        {options.headerRight?.({ canGoBack })}
      </View>
    </HeaderTemplate>
  );
};
