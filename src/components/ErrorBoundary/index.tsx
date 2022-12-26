import { Component, ReactNode } from 'react';

import { IBoundaryProps, IBoundaryState } from './interfaces';

export default class ErrorBoundary extends Component<IBoundaryProps, IBoundaryState> {
  public state: IBoundaryState = {
    error: null
  };

  public static getDerivedStateFromError(error: Error): IBoundaryState {
    return { error };
  }

  public render(): ReactNode {
    const { error } = this.state;
    const { children, FallbackComponent } = this.props;

    if (error) {
      return <FallbackComponent error={error} />;
    }

    return children;
  }
}
