import { Routes } from '@router/routes';

export interface INavBarProps {
  routes?: {
    id: number;
    name: string;
    path: Routes;
  }[];
  withMobileBurgerMenu?: boolean;
  $withMobileBurgerMenu?: boolean;
  isOpenBurger?: boolean;
  direction: 'column' | 'row';
}
