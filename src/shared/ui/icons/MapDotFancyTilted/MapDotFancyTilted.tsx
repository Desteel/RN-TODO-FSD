import React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { IconProps } from '../icons.types';

export const MapDotFancyTilted = ({ size = 'md' }: IconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={primary.main}
        d="M21.072 15.964C16.832 23.42 3.7 24 3.7 24s-5.092-11.531-.338-19.106c3.063-4.88 9.51-6.36 14.4-3.302 4.891 3.056 6.373 9.491 3.31 14.372Z"
      />
      <Ellipse
        cx={7.459}
        cy={7.452}
        fill={additional.main}
        rx={7.459}
        ry={7.452}
        transform="rotate(32.008 4.643 17.258) skewX(-.104)"
      />
      <Path
        fill={primary.main}
        d="m15.733 6.344 1.806 1.802-6.196 6.183-1.806-1.802z"
      />
      <Path
        fill={secondary.main}
        d="m9.176 8.563 1.806 1.802-1.806 1.803-1.806-1.803z"
      />
    </Svg>
  );
};
