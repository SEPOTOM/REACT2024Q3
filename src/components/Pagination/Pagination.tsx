import { useParams } from 'react-router-dom';

import { validatePage } from '@/utils/validation';

import { PaginationButton } from '@/components';
import { PaginationProps } from '@components/Pagination/types';

import '@components/Pagination/Pagination.css';

const Pagination = ({ totalPages }: PaginationProps) => {
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <div className="pagination">
      <PaginationButton
        to={`/search/${currentPage - 1}`}
        aria-label="Previous page"
        className="pagination__button"
        disabled={disablePrevious}
      >
        &lt;
      </PaginationButton>
      <span className="pagination__page">{currentPage}</span>
      <PaginationButton
        to={`/search/${currentPage + 1}`}
        aria-label="Next page"
        className="pagination__button"
        disabled={disableNext}
      >
        &gt;
      </PaginationButton>
    </div>
  );
};

export default Pagination;
