import { ChangeEvent, useId } from 'react';

import { useTheme, useUpdateTheme } from '@/contexts';

import { capitalize } from '@/utils/strings';

import { Themes } from '@/consts';

import styles from '@components/ThemesComboBox/ThemesComboBox.module.css';

const ThemesComboBox = () => {
  const themeSelectId = useId();
  const theme = useTheme();
  const updateTheme = useUpdateTheme();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateTheme(e.target.value);
  };

  return (
    <div
      className={`${styles.themesComboBox} ${styles[`themesComboBox_theme_${theme}`]}`}
    >
      <label htmlFor={themeSelectId} className={styles.themesComboBoxLabel}>
        Theme:
      </label>
      <select
        id={themeSelectId}
        value={theme}
        onChange={handleSelectChange}
        className={styles.themesComboBoxDropdown}
      >
        {Object.values(Themes).map((theme) => {
          return (
            <option value={theme} key={theme}>
              {capitalize(theme)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ThemesComboBox;
