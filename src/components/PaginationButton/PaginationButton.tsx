import { Link } from 'react-router-dom';

import { PaginationButtonProps } from '@components/PaginationButton/types';

import '@components/PaginationButton/PaginationButton.module.css';

const PaginationButton = (props: PaginationButtonProps) => {
  const { to, disabled, children, className } = props;
  const ariaLabel = props['aria-label'];

  return disabled ?
      <button
        type="button"
        disabled={disabled}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </button>
    : <Link to={to} aria-label={ariaLabel} className={className}>
        {children}
      </Link>;
};

export default PaginationButton;
