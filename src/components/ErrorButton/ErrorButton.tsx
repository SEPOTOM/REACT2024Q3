import { useState } from 'react';

import { useTheme } from '@/contexts';

import '@components/ErrorButton/ErrorButton.css';

const ErrorButton = () => {
  const [needError, setNeedError] = useState(false);
  const theme = useTheme();

  const handleClick = (): void => {
    setNeedError(true);
  };

  if (needError) {
    throw new Error('Test Error');
  }

  return (
    <button
      onClick={handleClick}
      className={`error-button error-button_theme_${theme}`}
    >
      Throw test error
    </button>
  );
};

export default ErrorButton;
