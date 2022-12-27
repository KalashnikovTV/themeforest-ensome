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
  { path: `${AppRoutes.home}`, element: <Home /> },
  { path: `${AppRoutes.blog}`, element: <Blog /> },
  { path: `${AppRoutes.solutions}`, element: <Solutions /> },
  { path: `${AppRoutes.contacts}`, element: <Contacts /> },
  { path: `${AppRoutes.ourTeam}`, element: <OurTeam /> },
  { path: `${AppRoutes.services}`, element: <Services /> },
  { path: `${AppRoutes.aboutUs}`, element: <AboutUs /> },
  { path: `${AppRoutes.faqs}`, element: <FaQs /> },
  { path: `${AppRoutes.notFound}`, element: <NotFound /> }
];
