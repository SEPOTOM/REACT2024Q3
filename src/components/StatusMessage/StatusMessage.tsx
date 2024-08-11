'use client';

import { useTheme } from '@/contexts';

import { StatusMessageProps } from '@components/StatusMessage/types';

import styles from '@components/StatusMessage/StatusMessage.module.css';

const StatusMessage = ({ children }: StatusMessageProps) => {
  const theme = useTheme();

  return (
    <p
      role="status"
      className={`${styles.statusMessage} ${styles[`statusMessage_theme_${theme}`]}`}
    >
      {children}
    </p>
  );
};

export default StatusMessage;
