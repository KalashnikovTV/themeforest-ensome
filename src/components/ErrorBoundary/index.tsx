import { Component, ReactNode } from 'react';

import ErrorFallback from '@components/ErrorFallback';

import { IErrorBoundaryProps, IErrorBoundaryState } from './interfaces';

export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { error };
  }

  public render(): ReactNode {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <ErrorFallback error={error} />;
    }

    return children;
  }
}
