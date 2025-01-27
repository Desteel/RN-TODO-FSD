import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { ActiveIconProps } from '../icons.types';

export const Compass = ({ active, size = 'md' }: ActiveIconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  const background = active ? primary.main : undefined;
  const border = active ? primary.main : additional.dark;
  const iconBorder = active ? additional.main : additional.dark;
  const iconBackground = active ? secondary.main : undefined;

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={background}
        fillRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
        clipRule="evenodd"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
        fill={border}
      />
      <Path
        fill={iconBackground}
        fillRule="evenodd"
        d="M16.947 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Z"
        clipRule="evenodd"
      />
      <Path
        fill={iconBorder}
        fillRule="evenodd"
        d="M16.947 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Zm-6.276 3.618-1.33 3.988 3.989-1.33 1.329-3.988-3.988 1.33Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};