import { EntryCard } from '@/components';

import { EntriesListProps } from '@components/EntriesList/types';

const EntriesList = ({ entries }: EntriesListProps) => {
  return (
    <ul>
      {entries.map((entry, index) => (
        <li key={index}>
          <EntryCard entry={entry} />
        </li>
      ))}
    </ul>
  );
};

export default EntriesList;
