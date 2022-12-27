import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { publicRoutes } from '@router/routes';

const AppRouter: React.FC = () => {
  return (
    <main>
      <Routes>
        {publicRoutes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.element} />;
        })}
        <Route path="*" element={<Navigate to={AppRoutes.home} replace />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
