import React from 'react';
import { Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Path, type NumberProp } from 'react-native-svg';
import { calcProportion } from 'shared/lib';
import { useTheme } from 'shared/theme';
import { styles } from './Logo.styles';

const LOGO_TEXT = 'Easy';

const DEFAULT_ICON_WIDTH = 50;
const DEFAULT_LOGO_WIDTH = 80;
const DEFAULT_FONT_SIZE = 24;

type LogoIconProps = Partial<{
  width: NumberProp;
  height: NumberProp;
}>;

const LogoIcon = ({
  width = DEFAULT_ICON_WIDTH,
  height = width,
  ...props
}: LogoIconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  return (
    <Svg
      viewBox="0 0 180 180"
      fill="none"
      width={width}
      height={height}
      {...props}
    >
      <Path fill={primary.main} d="M180 0H0v180h180V0Z" />
      <Path
        fill={additional.main}
        d="m150.735 70.457-21.56-21.561-74 74 21.56 21.56 74-74Z"
      />
      <Path
        fill={secondary.main}
        d="m72.424 97.023-21.56-21.561-21.562 21.56 21.561 21.562 21.561-21.561Z"
      />
    </Svg>
  );
};

export type LogoProps = Partial<{
  width: number;
  containerStyle: StyleProp<ViewStyle>;
}>;

export const Logo = ({
  width = DEFAULT_LOGO_WIDTH,
  containerStyle,
}: LogoProps) => {
  const {
    colors: { additional },
  } = useTheme();

  const iconWidth = calcProportion(
    DEFAULT_LOGO_WIDTH,
    DEFAULT_ICON_WIDTH,
    width,
  );
  const fontSize = calcProportion(DEFAULT_LOGO_WIDTH, DEFAULT_FONT_SIZE, width);

  return (
    <View style={[styles.container, { width }, containerStyle]}>
      <LogoIcon width={iconWidth} />

      <Text
        style={[
          styles.text,
          { color: additional.main, fontSize, lineHeight: fontSize },
        ]}
      >
        {LOGO_TEXT}
      </Text>
    </View>
  );
};
