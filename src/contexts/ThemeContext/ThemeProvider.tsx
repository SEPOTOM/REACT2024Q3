import { useState } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import { UpdateThemeContext } from '@/contexts/ThemeContext/UpdateThemeContext';
import { ThemeProviderProps, UpdateTheme } from '@/contexts/ThemeContext/types';

import { Themes } from '@/consts';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  const updateTheme: UpdateTheme = (newTheme: string): void => {
    if (Object.values(Themes).includes(newTheme)) {
      setTheme(newTheme);
    } else {
      console.error(`Unknown theme: ${newTheme}`);
    }
  };

  return (
    <UpdateThemeContext.Provider value={updateTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </UpdateThemeContext.Provider>
  );
};

export default ThemeProvider;
