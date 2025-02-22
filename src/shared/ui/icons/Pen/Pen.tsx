import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { ActiveIconProps } from '../icons.types';

export const Pen = ({ active, size = 'sm' }: ActiveIconProps) => {
  const {
    colors: {
      primary: { main },
      additional: { dark },
    },
  } = useTheme();

  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={active ? main : dark}
        fillRule="evenodd"
        d="M19 3.172a1.829 1.829 0 0 0-1.293.535L4.395 17.02l-.97 3.556 3.556-.97L20.293 6.293A1.829 1.829 0 0 0 19 3.172Zm-1.465-1.709a3.829 3.829 0 0 1 4.172 6.244l-13.5 13.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444l13.5-13.5a3.83 3.83 0 0 1 1.242-.83Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
