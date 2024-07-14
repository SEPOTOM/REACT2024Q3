import '@components/Pagination/Pagination.css';
import { Link, useParams } from 'react-router-dom';

const Pagination = () => {
  const { searchPage } = useParams();

  const currentPage = searchPage ? Number(searchPage) : 1;

  return (
    <div className="pagination">
      <Link to={`/search/${currentPage - 1}`}>&lt;</Link>
      <span className="pagination__page">{currentPage}</span>
      <Link to={`/search/${currentPage + 1}`}>&gt;</Link>
    </div>
  );
};

export default Pagination;
