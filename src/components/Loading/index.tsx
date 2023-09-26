import { memo } from 'react';

import { ILoadingProps } from './interfaces';
import { Spinner, Wrapper } from './styles';

const Loading: React.FC<ILoadingProps> = ({ height = 50, width = 50, margin = '0px auto' }: ILoadingProps) => {
  return (
    <Wrapper margin={margin}>
      <Spinner height={height} width={width} />
    </Wrapper>
  );
};

export default memo(Loading);
