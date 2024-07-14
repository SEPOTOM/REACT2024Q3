import { useParams } from 'react-router-dom';

import { validatePage } from '@/utils/validation';

import { PaginationButton } from '@/components';

import '@components/Pagination/Pagination.css';

const Pagination = () => {
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  return (
    <div className="pagination">
      <PaginationButton
        to={`/search/${currentPage - 1}`}
        aria-label="Previous page"
        className="pagination__button"
      >
        &lt;
      </PaginationButton>
      <span className="pagination__page">{currentPage}</span>
      <PaginationButton
        to={`/search/${currentPage + 1}`}
        aria-label="Next page"
        className="pagination__button"
      >
        &gt;
      </PaginationButton>
    </div>
  );
};

export default Pagination;
