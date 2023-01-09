import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const MovieList = styled.ul`
  columns: 2;
  column-gap: 60px;
`;
