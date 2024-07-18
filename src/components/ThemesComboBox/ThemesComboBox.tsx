import { ChangeEvent, useId } from 'react';

import { useTheme, useUpdateTheme } from '@/contexts';

import { capitalize } from '@/utils/strings';

import { Themes } from '@/consts';

import '@components/ThemesComboBox/ThemesComboBox.css';

const ThemesComboBox = () => {
  const themeSelectId = useId();
  const theme = useTheme();
  const updateTheme = useUpdateTheme();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateTheme(e.target.value);
  };

  return (
    <div>
      <label htmlFor={themeSelectId}>Theme:</label>
      <select id={themeSelectId} value={theme} onChange={handleSelectChange}>
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
