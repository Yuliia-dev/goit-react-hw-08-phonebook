import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  padding: 6px 16px;
  margin: 0;
  color: ${props => props.theme.colors.lightBlue};
  &.active {
    color: ${props => props.theme.colors.blue};
  }
`;
