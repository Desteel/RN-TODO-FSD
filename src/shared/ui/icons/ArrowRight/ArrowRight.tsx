import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize } from 'shared/theme';
import type { IconProps } from '../icons.types';

export type ArrowRightProps = IconProps &
  Partial<{
    color: string;
  }>;

export const ArrowRight = ({ color, size = 'md' }: ArrowRightProps) => {
  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.5 19L8.5 12L15.5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
