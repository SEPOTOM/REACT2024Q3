import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <span>404</span>
      <p>The requested page was not found</p>
      <Link to="/search/1">To the main page</Link>
    </div>
  );
};

export default NotFoundPage;
