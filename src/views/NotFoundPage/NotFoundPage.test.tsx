import { renderRouterWithUser } from '@tests/utils';

test('NotFoundPage is displayed for unknown routes', () => {
  window.history.pushState(null, '', '/unknown/route');

  const { getByRole } = renderRouterWithUser();

  expect(
    getByRole('heading', { name: /page was not found/i }),
  ).toBeInTheDocument();
});
