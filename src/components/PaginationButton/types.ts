import { ReactNode } from 'react';
import { To } from 'react-router-dom';

export interface PaginationButtonProps {
  to: To;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}
