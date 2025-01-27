import type { IconSizeValue } from 'shared/theme';

export type IconProps<Size extends IconSizeValue = IconSizeValue> = Partial<{
  size: Size;
}>;

export type ActiveIconProps<Size extends IconSizeValue = IconSizeValue> =
  IconProps<Size> &
    Partial<{
      active: boolean;
    }>;
