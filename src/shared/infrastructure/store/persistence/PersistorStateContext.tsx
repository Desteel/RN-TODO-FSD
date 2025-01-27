import React, { createContext, useContext, type ReactNode } from 'react';

export type PersistorState = {
  isReady: boolean;
};

const PersistorStateContext = createContext<PersistorState | undefined>(
  undefined,
);

export type PersistorStateProviderProps = {
  state: PersistorState;
  children: ReactNode;
};

export function PersistorStateProvider({
  state,
  children,
}: PersistorStateProviderProps) {
  return (
    <PersistorStateContext.Provider value={state}>
      {children}
    </PersistorStateContext.Provider>
  );
}

export function usePersistorState(): PersistorState {
  const context = useContext(PersistorStateContext);
  if (context === undefined) {
    throw new Error(
      `${usePersistorState.name} must be used within the ${PersistorStateProvider.name}`,
    );
  }
  return context;
}
