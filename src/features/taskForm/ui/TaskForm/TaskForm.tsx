import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { useTheme } from 'shared/theme';
import { Input } from 'shared/ui/Input';
import { KeyboardAvoidingScrollView } from 'shared/ui/KeyboardAvoidingScrollView';
import { StyledText } from 'shared/ui/StyledText';
import { Button } from 'shared/ui/buttons';
import { LocationField } from './LocationField';
import { PhotoField } from './PhotoField';
import { StatusRadios } from './StatusRadios';
import { styles } from './TaskForm.styles';
import type { InnerFormData } from './TaskForm.types';
import type { EditableTaskData } from 'entities/task/model';

export type TaskFormProps = {
  onSavePress: (data: EditableTaskData) => void;
} & Partial<{
  defaultData: EditableTaskData;
  containerStyle: StyleProp<ViewStyle>;
  fullWidthSectionStyle: StyleProp<ViewStyle>;
}>;

export const TaskForm = ({
  defaultData,
  containerStyle,
  fullWidthSectionStyle,
  onSavePress,
}: TaskFormProps) => {
  const {
    colors: { text },
  } = useTheme();

  const { control, handleSubmit } = useForm<InnerFormData>({
    defaultValues: defaultData,
  });

  const submit = handleSubmit((data) => {
    onSavePress({
      title: data.title,
      photoSource: data.photoSource || undefined,
      status: data.status || undefined,
      location: data.location || undefined,
    });
  });

  return (
    <KeyboardAvoidingScrollView style={containerStyle} role="form">
      <Controller
        name="photoSource"
        control={control}
        render={({ field: { value, onChange } }) => (
          <PhotoField photoSrc={value} onChange={onChange} />
        )}
      />

      <View style={[styles.fullWidthSection, fullWidthSectionStyle]}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              type="secondary"
              label="Task name"
              hasError={!!error}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          name="location"
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocationField value={value} onChange={onChange} />
          )}
        />

        <View>
          <StyledText style={[styles.radioTitle, { color: text.secondary }]}>
            Type
          </StyledText>

          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <StatusRadios
                value={field.value ?? ''}
                onChange={field.onChange}
              />
            )}
          />
        </View>

        <Button
          size="lg"
          type="secondary"
          title="Save"
          buttonBoxStyle={styles.bottomButton}
          onPress={submit}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};
