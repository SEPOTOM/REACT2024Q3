import { Link } from 'react-router-dom';

import { useTheme } from '@/contexts';

import '@views/NotFoundPage/NotFoundPage.css';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <div className={`not-found-page not-found-page_theme_${theme}`}>
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
