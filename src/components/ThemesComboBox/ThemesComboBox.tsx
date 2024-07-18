import { useId } from 'react';

import { capitalize } from '@/utils/strings';

import { Themes } from '@/consts';

import '@components/ThemesComboBox/ThemesComboBox.css';

const ThemesComboBox = () => {
  const themeSelectId = useId();

  return (
    <div>
      <label htmlFor={themeSelectId}>Theme:</label>
      <select id={themeSelectId}>
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
