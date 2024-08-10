import { ReactNode } from 'react';

import { SearchLayout } from '@/views';

const Layout = ({ children }: { children: ReactNode }) => {
  return <SearchLayout>{children}</SearchLayout>;
};

export default Layout;
