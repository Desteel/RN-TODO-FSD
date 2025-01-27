import React, { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from './PersistGate';
import { store } from './store';

export type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate>{children}</PersistGate>
    </Provider>
  );
};
