import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { useTheme, type Size } from 'shared/theme';

export type CheckboxIconProps = {
  size: Size<'lg' | 'md'>;
  active: boolean;
};

const dimensions: Record<CheckboxIconProps['size'], number> = {
  lg: 18,
  md: 16,
};

export const CheckboxIcon = ({ size = 'md', active }: CheckboxIconProps) => {
  const {
    colors: { primary, additional },
  } = useTheme();

  const sizeValue = dimensions[size];

  const background = active ? primary.main : primary.contrast;
  const border = active ? undefined : additional.contrast;
  const check = active ? additional.main : undefined;

  return (
    <Svg width={sizeValue} height={sizeValue} viewBox="0 0 16 16" fill="none">
      <Rect
        x="0.5"
        y="0.5"
        width={15}
        height={15}
        fill={background}
        rx={3.5}
        stroke={border}
        strokeWidth="1"
      />
      <Path
        fill={check}
        fillRule="evenodd"
        d="M4.224 8.48a1 1 0 1 0-1.447 1.38L5 12.19a1 1 0 0 0 .72.31h.004c.27 0 .53-.11.718-.305l6.777-7a1 1 0 1 0-1.437-1.39l-6.053 6.252L4.224 8.48Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
