import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const StyledLink = styled(NavLink)`
  padding: 8px;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px dashed burlywood;

  :hover:not(.active) {
    background-color: blanchedalmond;
  }

  &.active {
    background-color: burlywood;
    color: white;
  }
`;
