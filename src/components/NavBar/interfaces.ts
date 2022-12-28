import { AppRoutes } from '@constants/app-routes';

export interface INavBarProps {
  routes?: {
    id: number;
    name: string;
    path: AppRoutes;
  }[];
  withMobileBurgerMenu?: boolean;
  direction: 'column' | 'row';
}
