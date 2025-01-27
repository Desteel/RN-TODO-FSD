import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { IconProps } from '../icons.types';

export const Cross = ({ size = 'md' }: IconProps) => {
  const {
    colors: { additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={additional.dark}
        d="M7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 1 0 1.414-1.414L13.414 12l4.243-4.243a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343Z"
      />
    </Svg>
  );
};
