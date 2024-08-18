import { ReactNode } from 'react';

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
  errorMessage?: string;
  horizontal?: boolean;
  noError?: boolean;
}
