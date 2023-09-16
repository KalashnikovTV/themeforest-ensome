import { memo } from 'react';

import { ILoadingProps } from './interfaces';
import { Spinner } from './styles';

const Loading: React.FC<ILoadingProps> = ({ height, width, margin }: ILoadingProps) => {
  return <Spinner height={height} width={width} margin={margin} />;
};

export default memo(Loading);
