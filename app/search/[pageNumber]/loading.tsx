import { StatusMessage } from '@/components';
import { SearchPageColumns } from '@/views';

const SearchLoading = () => {
  return <SearchPageColumns main={<StatusMessage>Loading...</StatusMessage>} />;
};

export default SearchLoading;
