import { Link, useParams } from 'react-router-dom';

import { validatePage } from '@/utils/validation';

import '@components/Pagination/Pagination.css';

const Pagination = () => {
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  return (
    <div className="pagination">
      <Link to={`/search/${currentPage - 1}`} aria-label="Previous page">
        &lt;
      </Link>
      <span className="pagination__page">{currentPage}</span>
      <Link to={`/search/${currentPage + 1}`} aria-label="Next page">
        &gt;
      </Link>
    </div>
  );
};

export default Pagination;
