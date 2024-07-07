import { Component, ReactNode } from 'react';

import { StatusMessageProps } from '@components/StatusMessage/types';

import '@components/StatusMessage/StatusMessage.css';

class StatusMessage extends Component<StatusMessageProps> {
  render(): ReactNode {
    return <p>{this.props.children}</p>;
  }
}

export default StatusMessage;
