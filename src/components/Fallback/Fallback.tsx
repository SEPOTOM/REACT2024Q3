import { useTheme } from '@/contexts';

import { FallbackProps } from '@components/Fallback/types';

import '@components/Fallback/Fallback.css';

const Fallback = ({ error }: FallbackProps) => {
  const theme = useTheme();

  return (
    <div className={`fallback fallback_theme_${theme}`}>
      <h2 className="fallback__title">An unexpected error has occurred!</h2>
      <p className="fallback__text">
        Error: {error instanceof Error ? error.message : String(error)}
      </p>
    </div>
  );
};

export default Fallback;
