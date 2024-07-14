import { ReactElement } from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';

import { routes } from '@/routes';

const renderWithUser = (
  ui: ReactElement,
  renderOptions?: RenderOptions,
): RenderResult & { user: UserEvent } => {
  const user = userEvent.setup();
  return { user, ...render(ui, renderOptions) };
};

const renderRouterWithUser = (
  innerRoutes?: RouteObject[],
  renderOptions?: RenderOptions,
) => {
  const router = createBrowserRouter(innerRoutes ? innerRoutes : routes);
  return renderWithUser(<RouterProvider router={router} />, renderOptions);
};

export { renderWithUser, renderRouterWithUser };
