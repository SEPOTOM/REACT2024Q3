import { StatusMessageProps } from '@components/StatusMessage/types';

import '@components/StatusMessage/StatusMessage.css';

const StatusMessage = ({ children }: StatusMessageProps) => {
  return (
    <p role="status" className="status-message">
      {children}
    </p>
  );
};

export default StatusMessage;
