import type { StatusBarStyle } from 'react-native';
import type { UrgencyStatus } from 'shared/kernel';

type LegalSize = 'xlg' | 'lg' | 'md' | 'sm' | 'xsm';

export type Size<Value extends LegalSize = LegalSize> = Value;

type LegalThemeType = 'primary' | 'secondary' | 'tertiary';

export type ThemeType<Type extends LegalThemeType = LegalThemeType> = Type;

type ColorValue = string;

type ColorSet<Keys extends string> = Record<Keys, ColorValue>;

type Native = {
  statusBarStyle: StatusBarStyle;
};

type Colors = {
  primary: ColorSet<'main' | 'contrast'>;
  secondary: ColorSet<'main' | 'contrast'>;
  statuses: ColorSet<UrgencyStatus>;
  additional: ColorSet<'main' | 'light' | 'dark' | 'contrast'>;
  text: ColorSet<ThemeType>;
  background: ColorSet<ThemeType<'primary'>>;
};

export type Shape = {
  borderRadius: Record<Size<'xlg' | 'lg' | 'md' | 'sm'>, number>;
};

export type HeadingLevel = `h${1 | 2 | 3}`;

export type FontSize = {
  heading: Record<HeadingLevel, number>;
  body: Record<Size<'lg' | 'md' | 'sm'>, number>;
};

export type IconSizeValue = Size<'md' | 'sm' | 'xsm'>;

export type IconSize<Value extends IconSizeValue = IconSizeValue> = Record<
  Value,
  number
>;

export type Theme = {
  colors: Colors;
  native: Native;
};
