import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 10px;
  display: inline-block;
  width: 100%;

  :hover:not(.active) {
    background-color: burlywood;
    color: white;
  }
`;
