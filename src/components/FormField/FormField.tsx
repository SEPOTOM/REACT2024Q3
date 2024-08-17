import { ErrorMessage } from '@/components';

import { FormFieldProps } from '@components/FormField/types';

import styles from '@components/FormField/FormField.module.css';

const FormField = ({
  label,
  htmlFor,
  children,
  errorMessage,
  horizontal,
}: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <div
        className={`${styles.formField} ${horizontal && styles.formFieldHorizontal}`}
      >
        <label htmlFor={htmlFor} className={styles.formFieldLabel}>
          {label}
        </label>
        {children}
      </div>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default FormField;
