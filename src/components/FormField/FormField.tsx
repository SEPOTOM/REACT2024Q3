import { FormFieldProps } from '@components/FormField/types';

const FormField = ({
  label,
  htmlFor,
  children,
  errorMessage,
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FormField;
