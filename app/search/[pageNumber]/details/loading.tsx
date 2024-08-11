import { DetailsPageShadow, StatusMessage } from '@/components';
import { SearchPageColumns } from '@/views';

const DetailsLoading = () => {
  return (
    <SearchPageColumns
      main={<StatusMessage>Loading...</StatusMessage>}
      aside={
        <>
          <StatusMessage>Loading...</StatusMessage>
          <DetailsPageShadow />
        </>
      }
    />
  );
};

export default DetailsLoading;
