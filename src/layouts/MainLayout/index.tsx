import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { Main } from './styles';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default MainLayout;
