import { ReactElement } from 'react';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';

const renderWithUser = (
  ui: ReactElement,
  renderOptions?: RenderOptions,
): RenderResult & { user: UserEvent } => {
  const user = userEvent.setup();
  return { user, ...render(ui, renderOptions) };
};

export { renderWithUser };
