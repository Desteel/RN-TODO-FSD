import type { ValidAccessibilityRole } from '../ui.types';
import type { AccessibilityState } from 'react-native/types';

export type GetBaseButtonPropsPayload = Partial<{
  disabled: boolean;
  isLoading: boolean;
  [key: string]: unknown;
}>;

export const getBaseButtonProps = ({
  disabled,
  isLoading,
}: GetBaseButtonPropsPayload): {
  accessibilityRole: ValidAccessibilityRole<'button'>;
  accessibilityState: Pick<AccessibilityState, 'busy' | 'disabled'>;
} => {
  return {
    accessibilityRole: 'button',
    accessibilityState: {
      disabled: !!disabled,
      busy: isLoading,
    },
  };
};
