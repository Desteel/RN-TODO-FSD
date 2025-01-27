import React from 'react';
import { useForm, Controller, type UseFormSetValue } from 'react-hook-form';
import { View } from 'react-native';
import {
  useAuthenticate,
  type UserCredentials,
} from 'entities/authentication/model';
import { isProductionEnv } from 'shared/config';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/buttons';
import { styles } from './SignIn.styles';

const DevCredentialsButton = ({
  setValue,
}: {
  setValue: UseFormSetValue<UserCredentials>;
}) => {
  if (isProductionEnv) {
    return null;
  }
  return (
    <Button
      size="md"
      type="tertiary"
      title="Fill in the credentials (debug)"
      onPress={() => {
        // https://dummyjson.com/users/1
        setValue('login', 'atuny0');
        setValue('password', '9uQFF1Lh');
      }}
    />
  );
};

const inputRules = {
  required: true,
};

const defaultValues: UserCredentials = {
  login: '',
  password: '',
};

export const SignIn = () => {
  const { control, handleSubmit, setValue } = useForm<UserCredentials>({
    defaultValues,
  });

  const [authenticate, { isLoading }] = useAuthenticate();

  return (
    <View style={styles.form} role="form">
      <Controller
        name="login"
        control={control}
        rules={inputRules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <Input
            type="primary"
            label="Login"
            hasError={!!error}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={inputRules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <Input
            type="primary"
            label="Password"
            hasError={!!error}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />

      <DevCredentialsButton setValue={setValue} />

      <Button
        size="lg"
        type="secondary"
        title="Log In"
        buttonBoxStyle={styles.button}
        isLoading={isLoading}
        onPress={handleSubmit(authenticate)}
      />
    </View>
  );
};
