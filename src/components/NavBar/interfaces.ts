import { AppRoutes } from '@constants/app-routes';

export interface INavBarProps {
  routes?: {
    name: string;
    path: AppRoutes;
  }[];
  withMobileBurgerMenu?: boolean;
  direction: 'column' | 'row';
  isActiveLinkColor?: boolean;
}
