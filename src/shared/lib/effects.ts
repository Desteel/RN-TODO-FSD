import { useEffect, type EffectCallback } from 'react';

const EMPTY_DEPS: [] = [];

export const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(effect, EMPTY_DEPS);
};
