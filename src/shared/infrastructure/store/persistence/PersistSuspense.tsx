import React, { type ReactNode } from 'react';
import { Loader } from 'shared/ui/Loader';
import { usePersistorState } from './PersistorStateContext';

export type PersistSuspenseProps = {
  children: ReactNode;
};

export const PersistSuspense = ({ children }: PersistSuspenseProps) => {
  const { isReady } = usePersistorState();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isReady ? <>{children}</> : <Loader />;
};
