import { Link } from 'react-router-dom';

import '@views/NotFoundPage/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <span className="not-found-page__status">404</span>
      <h2 className="not-found-page__title">
        The requested page was not found
      </h2>
      <Link to="/search/1" className="not-found-page__link">
        To the main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
