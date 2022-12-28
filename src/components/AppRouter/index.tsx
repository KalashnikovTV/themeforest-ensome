import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { publicRoutes } from '@router/routes';

import { Main } from './styles';

const AppRouter: React.FC = () => {
  return (
    <Main>
      <Routes>
        {publicRoutes.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<Navigate to={AppRoutes.home} replace />} />
      </Routes>
    </Main>
  );
};

export default AppRouter;
