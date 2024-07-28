import { PropsWithChildren, ReactElement } from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { setupStore } from '@store/store';

import { ExtendedRenderOptions } from '@tests/types';

import { routes } from '@/routes';

const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

const renderWithUser = (
  ui: ReactElement,
  extendedRenderOptions?: ExtendedRenderOptions,
) => {
  const user = userEvent.setup();
  return { user, ...renderWithProviders(ui, extendedRenderOptions) };
};

const renderRouterWithUser = (
  innerRoutes?: RouteObject[],
  extendedRenderOptions?: ExtendedRenderOptions,
) => {
  const router = createBrowserRouter(innerRoutes ? innerRoutes : routes);
  return renderWithUser(
    <RouterProvider router={router} />,
    extendedRenderOptions,
  );
};

export { renderWithUser, renderRouterWithUser, renderWithProviders };
