import { useParams } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { validatePage } from '@/utils/validation';

import { PaginationButton } from '@/components';
import { PaginationProps } from '@components/Pagination/types';

import styles from '@components/Pagination/Pagination.module.css';

const Pagination = ({ totalPages }: PaginationProps) => {
  const theme = useTheme();
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <div
      className={`${styles.pagination} ${styles[`pagination_theme_${theme}`]}`}
    >
      <PaginationButton
        to={`/search/${currentPage - 1}`}
        aria-label="Previous page"
        className={styles.paginationButton}
        disabled={disablePrevious}
      >
        &lt;
      </PaginationButton>
      <span className={styles.paginationPage}>{currentPage}</span>
      <PaginationButton
        to={`/search/${currentPage + 1}`}
        aria-label="Next page"
        className={styles.paginationButton}
        disabled={disableNext}
      >
        &gt;
      </PaginationButton>
    </div>
  );
};

export default Pagination;
