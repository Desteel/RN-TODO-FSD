import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { ActiveIconProps } from '../icons.types';

export const Smile = ({ active, size = 'md' }: ActiveIconProps) => {
  const {
    colors: { primary, secondary, additional },
  } = useTheme();

  const sizeValue = iconSize[size];

  const additionalDark = additional.dark;
  const primaryMain = primary.main;

  const background = active ? primaryMain : undefined;
  const border = active ? primaryMain : additionalDark;
  const iconEyes = active ? additional.main : additionalDark;
  const iconMouth = active ? secondary.main : additionalDark;

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
        fill={iconMouth}
        fillRule="evenodd"
        d="M8.797 13.396A1 1 0 0 0 7.2 14.6L8 14l-.8.6.001.001.001.002.003.004.007.009.021.027.07.086a6.942 6.942 0 0 0 1.171 1.08c.798.58 2 1.191 3.526 1.191 1.526 0 2.728-.61 3.526-1.191a6.944 6.944 0 0 0 1.17-1.08c.03-.035.053-.064.07-.086l.022-.027.007-.01.003-.003.001-.002S16.8 14.6 16 14l.8.6a1 1 0 0 0-1.597-1.204l-.004.006a3.601 3.601 0 0 1-.194.219 4.951 4.951 0 0 1-.656.57c-.577.42-1.374.809-2.349.809-.974 0-1.772-.39-2.35-.809a4.952 4.952 0 0 1-.815-.748 1.932 1.932 0 0 1-.033-.041l-.005-.006Z"
        clipRule="evenodd"
      />
      <Path
        fill={iconEyes}
        fillRule="evenodd"
        d="M8 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
