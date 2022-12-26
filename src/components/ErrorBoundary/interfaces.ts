export interface IBoundaryProps {
  children?: React.ReactNode;
  FallbackComponent: React.FC<IBoundaryState>;
}

export interface IBoundaryState {
  error: Error | null;
}
