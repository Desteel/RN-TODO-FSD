import React, { type ReactNode } from 'react';
import {
  View,
  type ColorValue,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { useTheme } from 'shared/theme';
import { StyledText } from '../StyledText';
import { styles } from './Card.styles';
import { DescriptionText } from './DescriptionText';

export type CardProps = {
  title: string;
} & Partial<{
  markColor: ColorValue;
  marked: boolean;
  rightSidebar: ReactNode;
  body: ReactNode;
  controls: ReactNode;
  titleStyle: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
}>;

export const Card = ({
  title,
  marked,
  markColor,
  rightSidebar,
  body,
  controls,
  containerStyle,
  titleStyle,
}: CardProps) => {
  const {
    colors: { primary, additional },
  } = useTheme();

  return (
    <View
      style={[
        styles.container,
        !!controls && styles.containerWithControls,
        { backgroundColor: additional.main },
        containerStyle,
      ]}
    >
      {marked ? (
        <View
          style={[styles.mark, { backgroundColor: markColor || primary.main }]}
        />
      ) : null}

      {rightSidebar ? (
        <View style={styles.rightSidebar}>{rightSidebar}</View>
      ) : null}

      <View style={styles.main}>
        <StyledText style={[styles.title, titleStyle]}>{title}</StyledText>

        {body}

        {controls ? <View style={styles.controls}>{controls}</View> : null}
      </View>
    </View>
  );
};

Card.DescriptionText = DescriptionText;
