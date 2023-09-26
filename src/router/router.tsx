import { Suspense } from '@components/Suspense';

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

export const privateRoutes = [{}];

export const publicRoutes = [
  { id: 1, path: `${Routes.HOME}`, element: <Suspense component={Home} /> },
  { id: 2, path: `${Routes.BLOG}`, element: <Suspense component={Blogs} /> },
  { id: 3, path: `${Routes.BLOG}/:id`, element: <Suspense component={Blog} /> },
  { id: 4, path: `${Routes.SOLUTIONS}`, element: <Suspense component={Solutions} /> },
  { id: 5, path: `${Routes.SOLUTIONS}/:id`, element: <Suspense component={Solution} /> },
  { id: 6, path: `${Routes.CONTACTS}`, element: <Suspense component={Contacts} /> },
  { id: 7, path: `${Routes.OUR_TEAM}`, element: <Suspense component={OurTeam} /> },
  { id: 8, path: `${Routes.SERVICES}`, element: <Suspense component={Services} /> },
  { id: 9, path: `${Routes.SERVICES}/:id`, element: <Suspense component={Service} /> },
  { id: 10, path: `${Routes.ABOUT_US}`, element: <Suspense component={AboutUs} /> },
  { id: 11, path: `${Routes.FAQS}`, element: <Suspense component={FaQs} /> },
  { id: 12, path: `${Routes.NOT_FOUND}`, element: <Suspense component={NotFound} /> },
];
