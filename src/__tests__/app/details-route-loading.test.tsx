import { renderWithUser } from '@tests/utils';

import DetailsLoading from '@app/search/[pageNumber]/details/loading';

test('Details route loading displays two loader indicators', () => {
  const { getAllByRole } = renderWithUser(<DetailsLoading />);

  getAllByRole('status').forEach((loader) => {
    expect(loader).toBeInTheDocument();
  });
});
