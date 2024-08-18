import { Link } from 'react-router-dom';

import { EntriesList } from '@/components';

import { useAppDispatch, useAppSelector } from '@/hooks';

import {
  markEntriesAsOld,
  selectControlledFormEntries,
  selectUncontrolledFormEntries,
} from '@store/formsEntries/formsEntriesSlice';

import styles from '@views/MainPage/MainPage.module.css';
import { useEffect } from 'react';

const MainPage = () => {
  const controlledFormEntries = useAppSelector(selectControlledFormEntries);
  const uncontrolledFormEntries = useAppSelector(selectUncontrolledFormEntries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(1);
    const timeoutId = setTimeout(() => {
      console.log(2);
      dispatch(markEntriesAsOld());
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/controlled" className={styles.navLink}>
                Controlled Form
              </Link>
            </li>
            <li>
              <Link to="/uncontrolled" className={styles.navLink}>
                Uncontrolled Form
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.mainColumn}>
          <h2 className={styles.title}>Controlled Form Entries</h2>
          {controlledFormEntries.length > 0 ?
            <EntriesList entries={controlledFormEntries} />
          : <p className={styles.text}>
              Controlled Form Entries do not exist yet...
            </p>
          }
        </section>
        <section className={styles.mainColumn}>
          <h2 className={styles.title}>Uncontrolled Form Entries</h2>
          {uncontrolledFormEntries.length > 0 ?
            <EntriesList entries={uncontrolledFormEntries} />
          : <p className={styles.text}>
              Uncontrolled Form Entries do not exist yet...
            </p>
          }
        </section>
      </main>
    </div>
  );
};

export default MainPage;
