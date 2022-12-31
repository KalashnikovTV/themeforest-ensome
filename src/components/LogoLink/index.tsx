import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';

import { ILogoLinkProps } from './interfaces';
import { Image } from './styles';

const LogoLink: React.FC<ILogoLinkProps> = ({ isWhiteLogo = false }: ILogoLinkProps) => {
  return (
    <NavLink to={AppRoutes.home} title={`Go to ${AppRoutes.home}`}>
      <Image isWhiteLogo={isWhiteLogo} />
    </NavLink>
  );
};

export default memo(LogoLink);
