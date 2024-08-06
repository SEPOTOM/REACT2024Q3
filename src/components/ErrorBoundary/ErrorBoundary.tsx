import { Component, ErrorInfo, ReactNode } from 'react';

import { Fallback } from '@/components';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '@components/ErrorBoundary/types';

import '@components/ErrorBoundary/ErrorBoundary.module.css';

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: Readonly<ErrorBoundaryState> = {
    error: null,
  };

  render(): ReactNode {
    if (this.state.error) {
      return <Fallback error={this.state.error} />;
    }

    return this.props.children;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error);
    console.error(errorInfo.componentStack);
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      error,
    };
  }
}

export default ErrorBoundary;
