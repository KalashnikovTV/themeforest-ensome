export interface IErrorBoundaryProps {
  children?: React.ReactNode;
}

export interface IErrorBoundaryState {
  error: Error | null;
}
