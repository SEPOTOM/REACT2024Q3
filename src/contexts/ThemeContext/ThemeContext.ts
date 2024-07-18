import { createContext, useContext } from 'react';

import { Themes } from '@/consts';

export const ThemeContext = createContext<string>(Themes.LIGHT);

export const useTheme = (): string => {
  return useContext(ThemeContext);
};
