import { useRef, useEffect, type MutableRefObject } from 'react';

export const useLatestCallback = <
  Args extends unknown[],
  Result extends unknown = void,
>(
  callback: (...args: Args) => Result,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useRef(function latestCallback(this: unknown, ...args: Args) {
    return callbackRef.current.apply(this, args);
  }).current;
};

/**
 * @see {@link https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary/#worklet}
 */
export const useLatestWorklet = <
  Args extends unknown[],
  Result extends unknown = void,
>(
  callback: (...args: Args) => Result,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useRef((...args: Args) => {
    'worklet';
    return callbackRef.current(...args);
  }).current;
};

export function useLazyRef<Value>(init: () => Value) {
  const ref = useRef<Value>();

  if (ref.current === undefined) {
    ref.current = init();
  }

  return ref as MutableRefObject<Value>;
}
