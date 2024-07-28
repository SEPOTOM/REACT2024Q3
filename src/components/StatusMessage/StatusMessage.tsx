import { useTheme } from '@/contexts';

import { StatusMessageProps } from '@components/StatusMessage/types';

import '@components/StatusMessage/StatusMessage.css';

const StatusMessage = ({ children }: StatusMessageProps) => {
  const theme = useTheme();

  return (
    <p role="status" className={`status-message status-message_theme_${theme}`}>
      {children}
    </p>
  );
};

export default StatusMessage;
