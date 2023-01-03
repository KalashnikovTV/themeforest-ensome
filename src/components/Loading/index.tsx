import { ILoadingProps } from './interfaces';
import { Spinner } from './styles';

const Loading: React.FC<ILoadingProps> = ({ height, width }: ILoadingProps) => {
  return <Spinner height={height} width={width} />;
};

export default Loading;
