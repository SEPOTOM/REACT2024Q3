import { RenderOptions } from '@testing-library/react';

import { AppStore, RootState } from '@store/store';

export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}
