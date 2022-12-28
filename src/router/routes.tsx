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
  { id: 3, path: `${AppRoutes.solutions}`, element: <Solutions /> },
  { id: 4, path: `${AppRoutes.contacts}`, element: <Contacts /> },
  { id: 5, path: `${AppRoutes.ourTeam}`, element: <OurTeam /> },
  { id: 6, path: `${AppRoutes.services}`, element: <Services /> },
  { id: 7, path: `${AppRoutes.aboutUs}`, element: <AboutUs /> },
  { id: 8, path: `${AppRoutes.faqs}`, element: <FaQs /> },
  { id: 9, path: `${AppRoutes.notFound}`, element: <NotFound /> }
];
