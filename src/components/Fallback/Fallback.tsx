import { FallbackProps } from '@components/Fallback/types';

import '@components/Fallback/Fallback.css';

const Fallback = ({ error }: FallbackProps) => {
  return (
    <div className="fallback">
      <h2 className="fallback__title">An unexpected error has occurred!</h2>
      <p className="fallback__text">
        Error: {error instanceof Error ? error.message : String(error)}
      </p>
    </div>
  );
};

export default Fallback;
