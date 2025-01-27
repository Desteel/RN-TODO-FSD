import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useLatestCallback } from 'shared/lib';

export type UseBackPressProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export const useBackPress = ({ isOpen, closeModal }: UseBackPressProps) => {
  const handleBackPress = useLatestCallback(() => {
    if (isOpen) {
      closeModal();
    }
    return isOpen;
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, [handleBackPress]);
};
