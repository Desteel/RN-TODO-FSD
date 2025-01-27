import { useEffect, useRef, useState } from 'react';
import { persistor } from '../store';

const checkIsReady = () => {
  const { bootstrapped } = persistor.getState();
  return bootstrapped;
};

export const usePersistReadyState = () => {
  const [isReady, setIsReady] = useState(checkIsReady);
  const subscriptionRef = useRef<ReturnType<typeof persistor.subscribe>>();

  useEffect(() => {
    if (isReady) {
      return;
    }

    const unsubscribe = subscriptionRef.current;

    const handlePersistorState = () => {
      const isPersistorReady = checkIsReady();
      if (isPersistorReady) {
        setIsReady(true);
        unsubscribe?.();
      }
    };

    subscriptionRef.current = persistor.subscribe(handlePersistorState);

    return unsubscribe;
  }, [isReady]);

  return isReady;
};
