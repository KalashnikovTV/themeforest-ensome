import { AppRoutes } from '@constants/app-routes';
import AboutUs from '@pages/AboutUs';
import Blog from '@pages/Blog';
import Contacts from '@pages/Contacts';
import FaQs from '@pages/FaQs';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import OurTeam from '@pages/OurTeam';
import Services from '@pages/Services';
import Solutions from '@pages/Solutions';

export const privateRoutes = [{}];

export const publicRoutes = [
  { id: 1, path: `${AppRoutes.home}`, element: <Home /> },
  { id: 2, path: `${AppRoutes.blog}`, element: <Blog /> },
  { id: 3, path: `${AppRoutes.blog}/:id`, element: <Blog /> },
  { id: 4, path: `${AppRoutes.solutions}`, element: <Solutions /> },
  { id: 5, path: `${AppRoutes.contacts}`, element: <Contacts /> },
  { id: 6, path: `${AppRoutes.ourTeam}`, element: <OurTeam /> },
  { id: 7, path: `${AppRoutes.services}`, element: <Services /> },
  { id: 8, path: `${AppRoutes.aboutUs}`, element: <AboutUs /> },
  { id: 9, path: `${AppRoutes.faqs}`, element: <FaQs /> },
  { id: 10, path: `${AppRoutes.notFound}`, element: <NotFound /> }
];
