import { memo } from 'react';

import { NAVIGATE_LINKS } from '@constants/navigate-links';

import { INavBarProps } from './interfaces';

import { BurgerButton, BurgerRow, Link, NavBarList, NavBarItem, Nav } from './styles';

const NavBar: React.FC<INavBarProps> = ({
  routes = NAVIGATE_LINKS,
  withMobileBurgerMenu = false,
  direction = 'row',
  isActiveLinkColor = true
}: INavBarProps) => {
  return (
    <Nav>
      {withMobileBurgerMenu && (
        <BurgerButton>
          <BurgerRow />
          <BurgerRow />
          <BurgerRow />
        </BurgerButton>
      )}
      <NavBarList direction={direction}>
        {routes.map(({ name, path }, index) => {
          return (
            <NavBarItem key={`${name}-${index}`} direction={direction}>
              <Link to={path} direction={direction} isActiveLinkColor={isActiveLinkColor}>
                {name}
              </Link>
            </NavBarItem>
          );
        })}
      </NavBarList>
    </Nav>
  );
};

export default memo(NavBar);
