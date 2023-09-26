import { Navigate, Route, Routes as Router } from 'react-router-dom';

import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import { publicRoutes } from '@router/router';
import { Routes } from '@router/routes';

import { Main } from './styles';

const AppRouter: React.FC = () => {
  return (
    <Main>
      <ScrollToTop />
      <Router>
        {publicRoutes.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<Navigate to={Routes.HOME} replace />} />
      </Router>
    </Main>
  );
};

export default AppRouter;
