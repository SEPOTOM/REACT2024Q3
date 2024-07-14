import { renderRouterWithUser } from '@tests/utils';

test('Click on ErrorButton should show the error page', async () => {
  const { user, findByRole, getByRole } = renderRouterWithUser();

  await user.click(await findByRole('button', { name: /throw/i }));

  expect(
    getByRole('heading', { name: /unexpected error/i }),
  ).toBeInTheDocument();
});
