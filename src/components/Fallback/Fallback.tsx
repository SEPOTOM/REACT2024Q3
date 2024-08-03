import { useTheme } from '@/contexts';

import { FallbackProps } from '@components/Fallback/types';

import styles from '@components/Fallback/Fallback.module.css';

const Fallback = ({ error }: FallbackProps) => {
  const theme = useTheme();

  return (
    <div className={`${styles.fallback} ${styles[`fallback_theme_${theme}`]}`}>
      <h2 className={styles.fallbackTitle}>
        An unexpected error has occurred!
      </h2>
      <p className={styles.fallbackText}>
        Error: {error instanceof Error ? error.message : String(error)}
      </p>
    </div>
  );
};

export default Fallback;
