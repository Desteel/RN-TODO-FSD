import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { IconProps } from '../icons.types';

export const MapDotFancy = ({ size = 'md' }: IconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={primary.main}
        d="M20.992 9.07C21.313 16.521 11.996 23 11.996 23S3 16.845 3 9.07C3 4.061 7.028 0 11.996 0c4.968 0 8.996 4.061 8.996 9.07Z"
      />
      <Path
        fill={additional.main}
        d="m15.445 5.149 1.932 1.925-6.63 6.607-1.932-1.925z"
      />
      <Path
        fill={secondary.main}
        d="m8.428 7.52 1.932 1.926-1.932 1.925-1.931-1.925z"
      />
    </Svg>
  );
};
