import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px dashed burlywood;
  border-radius: 10px;
  padding: 10px;
`;

export const ActorPhoto = styled.img`
  border-radius: 10px;
`;
