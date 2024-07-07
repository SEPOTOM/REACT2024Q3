import { Component, ReactNode } from 'react';

import { FallbackProps } from '@components/Fallback/types';

import '@components/Fallback/Fallback.css';

class Fallback extends Component<FallbackProps> {
  render(): ReactNode {
    const { error } = this.props;

    return (
      <div className="fallback">
        <h2 className="fallback__title">An unexpected error has occurred!</h2>
        <p className="fallback__text">
          Error: {error instanceof Error ? error.message : String(error)}
        </p>
      </div>
    );
  }
}

export default Fallback;
