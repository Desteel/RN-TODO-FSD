import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'shared/theme';
import { HeaderTemplate } from 'shared/ui/HeaderTemplate';
import { Heading } from 'shared/ui/Heading';
import { StyledText } from 'shared/ui/StyledText';
import { Button } from 'shared/ui/buttons';
import { styles } from './Header.styles';

export type HeaderProps = {
  tasksNumber: number;
  onAddTaskPress: () => void;
};

export const Header = ({ tasksNumber, onAddTaskPress }: HeaderProps) => {
  const {
    colors: { additional, text },
  } = useTheme();

  return (
    <HeaderTemplate>
      <View style={styles.head}>
        <StyledText style={{ color: text.tertiary }}>Hello, there</StyledText>
        <Button type="secondary" title="+ Add task" onPress={onAddTaskPress} />
      </View>

      <Heading style={{ color: additional.main }} level="h2">
        You have {'\n'}
        {tasksNumber} tasks here
      </Heading>
    </HeaderTemplate>
  );
};
