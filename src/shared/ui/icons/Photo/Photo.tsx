import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconSize, useTheme } from 'shared/theme';
import type { IconProps } from '../icons.types';

export const Photo = ({ size = 'md' }: IconProps) => {
  const {
    colors: {
      additional: { dark },
    },
  } = useTheme();

  const sizeValue = iconSize[size];

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill="none">
      <Path
        fill={dark}
        fillRule="evenodd"
        d="M8.168 2.445A1 1 0 0 1 9 2h6a1 1 0 0 1 .832.445L17.535 5H21a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3.465l1.703-2.555ZM9.535 4 7.832 6.555A1 1 0 0 1 7 7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4a1 1 0 0 1-.832-.445L14.465 4h-4.93Z"
        clipRule="evenodd"
      />
      <Path
        fill={dark}
        fillRule="evenodd"
        d="M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
