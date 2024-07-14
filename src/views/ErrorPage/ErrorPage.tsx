import { useRouteError } from 'react-router-dom';

import { Fallback } from '@/components';

const ErrorPage = () => {
  const error = useRouteError();

  return <Fallback error={error} />;
};

export default ErrorPage;
