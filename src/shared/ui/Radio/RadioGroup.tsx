import React, { createContext, useContext, type ReactNode } from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { Card, type CardProps } from '../Card';
import { styles } from './RadioGroup.styles';
import { RadioIcon } from './RadioIcon';

type RadioValue = string;

export type RadioGroupProps = {
  value: RadioValue;
  children: ReactNode;
  onChange: (value: RadioValue) => void;
} & Partial<{
  allowUncheck: boolean;
}>;

export type RadioProps = Pick<CardProps, 'marked' | 'markColor'> & {
  value: RadioValue;
  label: string;
} & Partial<{
    disabled: boolean;
  }>;

export type RadioGroupContextType = Pick<RadioGroupProps, 'value' | 'onChange'>;

export const RadioGroupContext = createContext<
  RadioGroupContextType | undefined
>(undefined);

const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (context === undefined) {
    throw new Error(`${useRadioGroup.name} must be used within the RadioGroup`);
  }
  return context;
};

export const Radio = ({
  value,
  label,
  disabled,
  marked,
  markColor,
}: RadioProps) => {
  const { value: selectedValue, onChange } = useRadioGroup();

  const checked = selectedValue === value;

  const accessibilityState: PressableProps['accessibilityState'] = {
    checked: !!checked,
    disabled: !!disabled,
  };

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={accessibilityState}
      onPress={() => onChange(value)}
    >
      <Card
        title={label}
        marked={marked}
        markColor={markColor}
        rightSidebar={<RadioIcon active={!!checked} />}
      />
    </Pressable>
  );
};

const EMPTY_VALUE: RadioValue = '';

export const RadioGroup = ({
  value,
  children,
  allowUncheck,
  onChange,
}: RadioGroupProps) => {
  const handleValueChange = (newValue: RadioValue) => {
    const shouldUncheck = allowUncheck && newValue === value;
    onChange(shouldUncheck ? EMPTY_VALUE : newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onChange: handleValueChange }}>
      <View accessibilityRole="radiogroup" style={styles.box}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.Radio = Radio;
