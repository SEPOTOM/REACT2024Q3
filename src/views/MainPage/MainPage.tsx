import { Link } from 'react-router-dom';

import { EntriesList } from '@/components';

import { useAppSelector } from '@/hooks';

import {
  selectControlledFormEntries,
  selectUncontrolledFormEntries,
} from '@store/formsEntries/formsEntriesSlice';

const MainPage = () => {
  const controlledFormEntries = useAppSelector(selectControlledFormEntries);
  const uncontrolledFormEntries = useAppSelector(selectUncontrolledFormEntries);

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
      <main>
        <section>
          <h2>Controlled Form Entries</h2>
          {controlledFormEntries.length > 0 ?
            <EntriesList entries={controlledFormEntries} />
          : <p>Controlled Form Entries do not exist yet...</p>}
        </section>
        <section>
          <h2>Uncontrolled Form Entries</h2>
          {uncontrolledFormEntries.length > 0 ?
            <EntriesList entries={uncontrolledFormEntries} />
          : <p>Uncontrolled Form Entries do not exist yet...</p>}
        </section>
      </main>
    </div>
  );
};

export default MainPage;
