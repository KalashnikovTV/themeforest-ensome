import { Route, Routes as Router } from 'react-router-dom';

import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import { Suspense } from '@components/Suspense';
import MainLayout from '@layouts/MainLayout';
import AboutUs from '@pages/AboutUs';
import Blog from '@pages/Blog';
import Blogs from '@pages/Blogs';
import Contacts from '@pages/Contacts';
import FaQs from '@pages/FaQs';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import OurTeam from '@pages/OurTeam';
import Service from '@pages/Service';
import Services from '@pages/Services';
import Solution from '@pages/Solution';
import Solutions from '@pages/Solutions';
import { Routes } from '@router/routes';
import { Content } from '@theme/theme';

const AppRouter: React.FC = () => {
  return (
    <Content>
      <ScrollToTop />
      <Router>
        <Route path={Routes.ROOT} element={<MainLayout />}>
          <Route path={Routes.HOME} element={<Suspense component={Home} />} />;
          <Route path={Routes.BLOG} element={<Suspense component={Blogs} />} />;
          <Route path={`${Routes.BLOG}/:id`} element={<Suspense component={Blog} />} />;
          <Route path={Routes.SOLUTIONS} element={<Suspense component={Solutions} />} />;
          <Route path={`${Routes.SOLUTIONS}/:id`} element={<Suspense component={Solution} />} />;
          <Route path={Routes.CONTACTS} element={<Suspense component={Contacts} />} />;
          <Route path={Routes.OUR_TEAM} element={<Suspense component={OurTeam} />} />;
          <Route path={Routes.SERVICES} element={<Suspense component={Services} />} />;
          <Route path={`${Routes.SERVICES}/:id`} element={<Suspense component={Service} />} />;
          <Route path={Routes.ABOUT_US} element={<Suspense component={AboutUs} />} />;
          <Route path={Routes.FAQS} element={<Suspense component={FaQs} />} />;
          <Route path={Routes.NOT_FOUND} element={<Suspense component={NotFound} />} />;
          <Route path={Routes.ALL} element={<Suspense component={NotFound} />} />
        </Route>
      </Router>
    </Content>
  );
};

export default AppRouter;
