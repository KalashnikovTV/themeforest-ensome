import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { NAVIGATE_LINKS } from '@constants/navigate-links';

import { INavBarProps } from './interfaces';
import { BurgerButton, BurgerRow, Link, List, Item, Nav } from './styles';

const NavBar: React.FC<INavBarProps> = ({
  routes = NAVIGATE_LINKS,
  withMobileBurgerMenu = false,
  direction = 'row',
}: INavBarProps) => {
  const location = useLocation();

  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const handleBurgerClick = (): void => {
    setIsOpenBurger(!isOpenBurger);
  };

  useEffect(() => {
    setIsOpenBurger(false);
  }, [location]);

  return (
    <Nav>
      {withMobileBurgerMenu && (
        <BurgerButton onClick={handleBurgerClick}>
          <BurgerRow />
          <BurgerRow />
          <BurgerRow />
        </BurgerButton>
      )}
      <List direction={direction} isOpenBurger={isOpenBurger} withMobileBurgerMenu={withMobileBurgerMenu}>
        {routes.map(({ id, name, path }) => {
          return (
            <Item key={id} direction={direction} withMobileBurgerMenu={withMobileBurgerMenu}>
              <Link
                to={path}
                direction={direction}
                className={({ isActive }): string | undefined => (isActive ? 'active' : undefined)}
                title={`Go to ${path}`}
                $withMobileBurgerMenu={withMobileBurgerMenu}
              >
                {name}
              </Link>
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

export default memo(NavBar);
