import React, { type ReactNode } from 'react';
import { PersistorStateProvider } from 'shared/infrastructure/store';
import { useOwnStorage } from './useOwnStorage';
import { usePersistReadyState } from './usePersistReadyState';

export type PersistGateProps = {
  children: ReactNode;
};

export const PersistGate = ({ children }: PersistGateProps) => {
  useOwnStorage();
  const isReady = usePersistReadyState();

  return (
    <PersistorStateProvider state={{ isReady }}>
      {children}
    </PersistorStateProvider>
  );
};
