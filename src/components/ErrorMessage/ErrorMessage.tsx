import { ErrorMessageProps } from '@components/ErrorMessage/types';

import styles from '@components/ErrorMessage/ErrorMessage.module.css';

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
