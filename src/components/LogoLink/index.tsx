import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '@router/routes';

import { ILogoLinkProps } from './interfaces';
import { Image } from './styles';

const LogoLink: React.FC<ILogoLinkProps> = ({ isWhiteLogo = false }: ILogoLinkProps) => {
  return (
    <NavLink to={Routes.HOME} title={`Go to ${Routes.HOME}`}>
      <Image isWhiteLogo={isWhiteLogo} />
    </NavLink>
  );
};

export default memo(LogoLink);
