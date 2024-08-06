import { renderWithUser } from '@tests/utils';

import { ErrorBoundary, ErrorButton } from '@/components';

test('Click on ErrorButton should show the error page', async () => {
  const { user, findByRole, getByRole } = renderWithUser(
    <ErrorBoundary>
      <ErrorButton />
    </ErrorBoundary>,
  );

  await user.click(await findByRole('button', { name: /throw/i }));

  expect(
    getByRole('heading', { name: /unexpected error/i }),
  ).toBeInTheDocument();
});
