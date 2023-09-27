import { Suspense as ReactSuspense, lazy } from 'react';

import Loading from '@components/Loading';

import { SuspenseProps } from './interfaces';

const getSuspenseDisplayName = (Component: React.FC): string => {
  console.log(Component.displayName || Component.name || 'Component');
  return Component.displayName || Component.name || 'Component';
};

export const Suspense: React.FC<SuspenseProps> = ({ component: Component }: SuspenseProps) => {
  console.log(getSuspenseDisplayName(Component));
  const LazyComponent = lazy(() => import(`@pages/${getSuspenseDisplayName(Component)}`));

  return (
    <ReactSuspense fallback={<Loading margin="50px auto" />}>
      <LazyComponent />
    </ReactSuspense>
  );
};
