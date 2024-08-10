'use client';

import { ReactNode } from 'react';

import { useTheme } from '@/contexts';

import styles from '@views/MainPage/MainPage.module.css';

const SearchLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <div className={`${styles.mainPage} ${styles[`mainPage_theme_${theme}`]}`}>
      {children}
    </div>
  );
};

export default SearchLayout;
