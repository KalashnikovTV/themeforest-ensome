import { ILinkMoreProps } from './interfaces';
import { Link } from './styles';

const LinkMore: React.FC<ILinkMoreProps> = ({ path, width, height, children }: ILinkMoreProps) => {
  return (
    <Link to={path} title={`Go to ${path}`} width={width} height={height}>
      {children}
    </Link>
  );
};

export default LinkMore;
