import { useId } from 'react';

import '@components/ThemesComboBox/ThemesComboBox.css';

const ThemesComboBox = () => {
  const themeSelectId = useId();

  return (
    <div>
      <label htmlFor={themeSelectId}>Theme:</label>
      <select id={themeSelectId}></select>
    </div>
  );
};

export default ThemesComboBox;
