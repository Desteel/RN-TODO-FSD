import type { Theme } from './theme.types';

const COLORS: Theme['colors'] = {
  primary: {
    main: '#6871EE',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#F8D94F',
    contrast: '#262B4F',
  },
  statuses: {
    urgent: '#DF7E8D',
    regular: '#F8D94F',
    low: '#77D4BD',
  },
  additional: {
    main: '#FFFFFF',
    light: '#F5F5F5',
    dark: '#000000',
    contrast: '#DADBDD',
  },
  text: {
    primary: '#262B4F',
    secondary: '#464963',
    tertiary: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    primary: '#F8FAFF',
  },
};

const NATIVE: Theme['native'] = {
  statusBarStyle: 'light-content',
};

export const THEME_LIGHT: Theme = {
  colors: COLORS,
  native: NATIVE,
};
