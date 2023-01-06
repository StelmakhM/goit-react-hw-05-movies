import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  border: 1px dashed burlywood;

  :hover:not(.active) {
    background-color: burlywood;
    color: white;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const GeneralContainer = styled.div`
  margin: 0 auto;
  width: 50%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AdditionalContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const InfoTitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 30px;
`;
