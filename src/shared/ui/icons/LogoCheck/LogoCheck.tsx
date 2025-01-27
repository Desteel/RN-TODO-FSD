import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { ActiveIconProps } from '../icons.types';

export const LogoCheck = ({ active, size = 'md' }: ActiveIconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  const additionalDark = additional.dark;
  const primaryMain = primary.main;

  const background = active ? primaryMain : undefined;
  const border = active ? primaryMain : additionalDark;
  const iconBackground = active ? additional.main : additionalDark;
  const iconTail = active ? secondary.main : additionalDark;

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
        d="m15.573 8.373 1.978 1.978-6.788 6.788-1.978-1.978z"
      />
      <Path
        fill={iconTail}
        d="m8.39 10.81 1.978 1.978-1.978 1.978-1.978-1.978z"
      />
    </Svg>
  );
};
