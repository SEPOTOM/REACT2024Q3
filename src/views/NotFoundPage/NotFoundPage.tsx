import { Link } from 'react-router-dom';

import { useTheme } from '@/contexts';

import styles from '@views/NotFoundPage/NotFoundPage.module.css';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <div
      className={`${styles.notFoundPage} ${styles[`notFoundPage_theme_${theme}`]}`}
    >
      <span className={styles.notFoundPageStatus}>404</span>
      <h2 className={styles.notFoundPageTitle}>
        The requested page was not found
      </h2>
      <Link to="/search/1" className={styles.notFoundPageLink}>
        To the main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
