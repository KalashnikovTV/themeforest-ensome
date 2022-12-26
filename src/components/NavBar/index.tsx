import { AppRoutes } from '@constants/app-routes';

import { Link } from './styles';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={AppRoutes.home}>Home</Link>
        </li>
        <li>
          <Link to={AppRoutes.blog}>Blog</Link>
        </li>
        <li>
          <Link to={AppRoutes.solutions}>Solutions</Link>
        </li>
        <li>
          <Link to={AppRoutes.contacts}>Contacts</Link>
        </li>
        <li>
          <Link to={AppRoutes.ourTeam}>Our Team</Link>
        </li>
        <li>
          <Link to={AppRoutes.services}>Services</Link>
        </li>
        <li>
          <Link to={AppRoutes.aboutUs}>About Us</Link>
        </li>
        <li>
          <Link to={AppRoutes.faqs}>FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
