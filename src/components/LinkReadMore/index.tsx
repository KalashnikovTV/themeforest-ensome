import { memo } from 'react';

import { ILinkReadMoreProps } from './interfaces';
import { Link } from './styles';

const LinkReadMore: React.FC<ILinkReadMoreProps> = ({ path }: ILinkReadMoreProps) => {
  return (
    <Link to={path} title={`Go to ${path}`}>
      Read more
    </Link>
  );
};

export default memo(LinkReadMore);
