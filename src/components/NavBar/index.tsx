import { memo } from 'react';

import { NAVIGATE_LINKS } from '@constants/navigate-links';

import { INavBarProps } from './interfaces';

import { BurgerButton, BurgerRow, Link, List, Item, Nav } from './styles';

const NavBar: React.FC<INavBarProps> = ({
  routes = NAVIGATE_LINKS,
  withMobileBurgerMenu = false,
  direction = 'row'
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
      <List direction={direction}>
        {routes.map(({ id, name, path }) => {
          return (
            <Item key={id} direction={direction}>
              <Link
                to={path}
                direction={direction}
                className={({ isActive }): string | undefined => (isActive ? 'active' : undefined)}
                title={`Go to ${path}`}
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
