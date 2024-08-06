import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { setupStore } from '@store/store';

import { ExtendedRenderOptions } from '@tests/types';

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

export { renderWithUser, renderWithProviders };
