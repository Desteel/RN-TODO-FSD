import { useTheme } from 'shared/theme';
import type { UrgencyStatus } from 'shared/kernel';

export const useStatusColor = (status: UrgencyStatus | undefined) => {
  const {
    colors: { statuses },
  } = useTheme();

  return status ? statuses[status] : undefined;
};
