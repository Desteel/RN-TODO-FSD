import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { Button, type ButtonProps } from '../buttons';
import { styles } from './Filter.styles';

type Filter<FilterValue> = {
  title: string;
  value: FilterValue;
};

export type FilterProps<FilterValue> = {
  filters: Filter<FilterValue>[];
  selectedFilter: Filter<FilterValue>;
  onSelect: (filter: Filter<FilterValue>) => void;
} & Partial<{
  containerStyle: StyleProp<ViewStyle>;
}>;

const getButtonType = <FilterValue,>(
  value: FilterValue,
  selectedValue: FilterValue,
): ButtonProps['type'] => {
  return value === selectedValue ? 'primary' : 'tertiary';
};

export const Filter = <FilterValue,>({
  filters,
  selectedFilter,
  onSelect,
  containerStyle,
}: FilterProps<FilterValue>) => {
  const selectedValue = selectedFilter.value;

  return (
    <View style={[styles.container, containerStyle]}>
      {filters.map((filter, index) => {
        const { title, value } = filter;

        return (
          <Button
            key={index}
            type={getButtonType(value, selectedValue)}
            title={title}
            onPress={() => onSelect(filter)}
          />
        );
      })}
    </View>
  );
};
