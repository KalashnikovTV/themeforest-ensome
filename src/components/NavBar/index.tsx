import { memo } from 'react';

import { AppRoutes } from '@constants/app-routes';

import { INavBarProps } from './interfaces';

import { BurgerButton, BurgerRow, Link, NavBarList, NavBarItem } from './styles';

const NavBar: React.FC<INavBarProps> = ({ withMobileBurgerMenu = false }: INavBarProps) => {
  return (
    <nav>
      {withMobileBurgerMenu && (
        <BurgerButton>
          <BurgerRow />
          <BurgerRow />
          <BurgerRow />
        </BurgerButton>
      )}
      <NavBarList>
        {/* TODO вынести в константу линки */}
        <NavBarItem>
          <Link to={AppRoutes.home}>Home</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.blog}>Blog</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.solutions}>Solutions</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.contacts}>Contacts</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.ourTeam}>Our Team</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.services}>Services</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.aboutUs}>About Us</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={AppRoutes.faqs}>FAQs</Link>
        </NavBarItem>
      </NavBarList>
    </nav>
  );
};

export default memo(NavBar);
