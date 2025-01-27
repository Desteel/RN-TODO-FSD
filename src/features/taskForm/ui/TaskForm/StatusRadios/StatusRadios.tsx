import React from 'react';
import { useTheme } from 'shared/theme';
import { RadioGroup } from 'shared/ui/Radio';
import type { UrgencyStatus } from 'shared/kernel';

const statusRadios: Array<{
  label: Capitalize<UrgencyStatus>;
  status: UrgencyStatus;
}> = [
  {
    label: 'Urgent',
    status: 'urgent',
  },
  {
    label: 'Regular',
    status: 'regular',
  },
  {
    label: 'Low',
    status: 'low',
  },
];

export type StatusRadiosProps = {
  value: string;
  onChange: (value: string) => void;
};

export const StatusRadios = ({ value, onChange }: StatusRadiosProps) => {
  const {
    colors: { statuses },
  } = useTheme();

  return (
    <RadioGroup value={value} onChange={onChange} allowUncheck>
      {statusRadios.map(({ label, status }, index) => (
        <RadioGroup.Radio
          key={index}
          value={status}
          label={label}
          marked
          markColor={statuses[status]}
        />
      ))}
    </RadioGroup>
  );
};
