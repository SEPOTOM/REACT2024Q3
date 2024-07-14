import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <span>404</span>
      <h2>The requested page was not found</h2>
      <Link to="/search/1">To the main page</Link>
    </div>
  );
};

export default NotFoundPage;
