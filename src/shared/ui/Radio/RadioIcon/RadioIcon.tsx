import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from 'shared/theme';

export type RadioIconProps = {
  active: boolean;
};

export const RadioIcon = ({ active }: RadioIconProps) => {
  const {
    colors: { primary, additional },
  } = useTheme();

  const border = active ? primary.main : additional.contrast;
  const check = active ? primary.main : 'none';

  return (
    <Svg width={16} height={16} viewBox="0 0 16 16">
      <Circle cx={8} cy={8} r={7} fill="none" stroke={border} />
      <Circle cx={8} cy={8} r={3} fill={check} />
    </Svg>
  );
};
