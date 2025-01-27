import {
  useDispatch,
  useSelector as useSelectorDefault,
  type TypedUseSelectorHook,
} from 'react-redux';
import { useLatestCallback } from 'shared/lib';
import type { Action as ActionType } from '@reduxjs/toolkit';
import type { Dispatch } from '@reduxjs/toolkit/react';

export type StoreState = Record<string, unknown>;

export const useSelector: TypedUseSelectorHook<StoreState> = useSelectorDefault;

export const useAction = <Payload extends unknown[], Action extends ActionType>(
  actionCreator: (...args: Payload) => Action,
) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  return useLatestCallback((...args: Payload) => {
    return dispatch(actionCreator.apply(null, args));
  });
};

export const createBaseSelector = <Entity>(stateKey: string) => {
  const baseSelector = (state: StoreState): Entity => {
    if (stateKey in state) {
      return state[stateKey] as Entity;
    }
    throw new Error(`Reducer with key '${stateKey}' in not registered`);
  };
  return baseSelector;
};
