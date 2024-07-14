import { useState } from 'react';

import '@components/ErrorButton/ErrorButton.css';

const ErrorButton = () => {
  const [needError, setNeedError] = useState(false);

  const handleClick = (): void => {
    setNeedError(true);
  };

  if (needError) {
    throw new Error('Test Error');
  }

  return (
    <button onClick={handleClick} className="error-button">
      Throw test error
    </button>
  );
};

export default ErrorButton;
