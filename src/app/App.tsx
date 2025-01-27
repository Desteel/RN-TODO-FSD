import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from 'navigation';
import { ThemeProvider } from 'shared/theme';
import { ScreenWrapper } from './ScreenWrapper';
import { StoreProvider } from './store';

const handleRouterReadiness = () => {
  BootSplash.hide();
};

export const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ScreenWrapper>
          <StoreProvider>
            <Router onReady={handleRouterReadiness} />
          </StoreProvider>
        </ScreenWrapper>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
