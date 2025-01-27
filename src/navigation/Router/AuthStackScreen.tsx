import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SignInPage } from '../pages/auth';
import type { AuthStackParamList } from '../navigation.types';
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const signInOptions = { title: 'Sign In', headerShown: false };

export function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInPage}
        options={signInOptions}
      />
    </AuthStack.Navigator>
  );
}
