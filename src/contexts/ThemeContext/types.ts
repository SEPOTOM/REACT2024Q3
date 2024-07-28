import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export type UpdateTheme = (newTheme: string) => void;
