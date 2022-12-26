import { Navigate, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '@router/routes';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
