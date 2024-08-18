import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/controlled">Controlled Form</Link>
            </li>
            <li>
              <Link to="/uncontrolled">Uncontrolled Form</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainPage;
