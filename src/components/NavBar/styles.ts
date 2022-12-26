import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: #9497a1;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  &.active {
    color: #292d33;
  }
`;
