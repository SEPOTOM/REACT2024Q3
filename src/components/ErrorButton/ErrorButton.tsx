import { Component, ReactNode } from 'react';

import { ErrorButtonState } from '@components/ErrorButton/types';

import '@components/ErrorButton/ErrorButton.css';

class ErrorButton extends Component {
  state: Readonly<ErrorButtonState> = {
    needError: false,
  };

  handleClick = () => {
    this.setState({ needError: true });
  };

  render(): ReactNode {
    if (this.state.needError) {
      throw new Error('Test Error');
    }

    return (
      <button onClick={this.handleClick} className="error-button">
        Throw test error
      </button>
    );
  }
}

export default ErrorButton;
