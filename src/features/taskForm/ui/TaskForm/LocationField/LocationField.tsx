import React from 'react';
import { View } from 'react-native';
import { getLocationText, useLocation } from 'shared/lib';
import { useTheme } from 'shared/theme';
import { Checkbox } from 'shared/ui/Checkbox';
import { StyledText } from 'shared/ui/StyledText';
import type { InnerFormData } from '../TaskForm.types';

export type LocationFieldProps = {
  value: InnerFormData['location'];
  onChange: (value: InnerFormData['location'] | null) => void;
};

export const LocationField = ({ value, onChange }: LocationFieldProps) => {
  const {
    colors: { text },
  } = useTheme();

  const { isLoading, getLocation } = useLocation();

  const handleChange = async (isChecked: boolean) => {
    onChange(isChecked ? null : (await getLocation()) || null);
  };

  return (
    <View>
      <Checkbox
        title="Add location"
        checked={!!value}
        isLoading={isLoading}
        onChange={handleChange}
      />

      {value ? (
        <StyledText style={[{ color: text.secondary }]}>
          {getLocationText(value)}
        </StyledText>
      ) : null}
    </View>
  );
};
