import { EntryCard } from '@/components';

import { EntriesListProps } from '@components/EntriesList/types';

import styles from '@components/EntriesList/EntriesList.module.css';

const EntriesList = ({ entries }: EntriesListProps) => {
  return (
    <ul className={styles.list}>
      {entries.map((entry, index) => (
        <li key={index}>
          <EntryCard entry={entry} />
        </li>
      ))}
    </ul>
  );
};

export default EntriesList;
