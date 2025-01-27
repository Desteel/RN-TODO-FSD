import React, {
  useContext,
  useMemo,
  createContext,
  type ReactNode,
} from 'react';
import { useColorScheme, type ColorSchemeName } from 'react-native';
import { THEME_DARK } from './theme.dark';
import { THEME_LIGHT } from './theme.light';
import type { Theme } from './theme.types';

const ThemeContext = createContext<Theme | undefined>(undefined);

function getTheme(colorSchemeName: ColorSchemeName) {
  return colorSchemeName === 'dark' ? THEME_DARK : THEME_LIGHT;
}

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();

  const theme = useMemo(() => {
    return getTheme(colorScheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      `${useTheme.name} must be used within the ${ThemeProvider.name}`,
    );
  }
  return context;
}
