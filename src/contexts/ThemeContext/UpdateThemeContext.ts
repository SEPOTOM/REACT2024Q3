import { createContext, useContext } from 'react';

import { UpdateTheme } from '@/contexts/ThemeContext/types';

export const UpdateThemeContext = createContext<UpdateTheme>(() => {});

export const useUpdateTheme = (): UpdateTheme => {
  return useContext(UpdateThemeContext);
};
