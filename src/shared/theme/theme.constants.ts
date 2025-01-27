import type { FontSize, IconSize, Shape } from './theme.types';

export const shape: Shape = {
  borderRadius: {
    xlg: 18,
    lg: 12,
    md: 8,
    sm: 4,
  },
};

export const fontFamily = {
  normal: 'SourceSansPro-Regular',
  bold: 'SourceSansPro-Bold',
  logo: 'VampiroOne-Regular',
};

export const fontSize: FontSize = {
  heading: {
    h1: 32,
    h2: 24,
    h3: 18,
  },
  body: {
    lg: 18,
    md: 14,
    sm: 12,
  },
};

export const iconSize: IconSize = {
  md: 24,
  sm: 16,
  xsm: 10,
};
