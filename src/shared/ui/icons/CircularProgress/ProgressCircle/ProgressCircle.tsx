import React from 'react';
import { Circle, type StrokeProps } from 'react-native-svg';

export type ProgressCircleProps = Pick<
  StrokeProps,
  'stroke' | 'strokeDasharray' | 'strokeDashoffset'
>;

export const ProgressCircle = (props: ProgressCircleProps) => {
  return <Circle cx={12} cy={12} r={10} strokeWidth={4} {...props} />;
};
