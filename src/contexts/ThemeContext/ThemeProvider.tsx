import { useEffect, useState } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import { UpdateThemeContext } from '@/contexts/ThemeContext/UpdateThemeContext';
import { ThemeProviderProps, UpdateTheme } from '@/contexts/ThemeContext/types';

import { getTheme, saveTheme } from '@utils/localStorage';

import { Themes } from '@/consts';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  useEffect(() => {
    const savedTheme = getTheme();

    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  const updateTheme: UpdateTheme = (newTheme: string): void => {
    if (Object.values(Themes).includes(newTheme)) {
      setTheme(newTheme);
      saveTheme(newTheme);
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
