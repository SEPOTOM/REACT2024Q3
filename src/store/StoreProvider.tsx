'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, setupStore } from '@store/store';

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = setupStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
