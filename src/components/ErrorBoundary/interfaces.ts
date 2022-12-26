export interface IErrorBoundaryProps {
  children?: React.ReactNode;
  FallbackComponent: React.FC<IErrorBoundaryState>;
}

export interface IErrorBoundaryState {
  error: Error | null;
}
