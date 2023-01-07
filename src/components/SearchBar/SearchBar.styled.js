import styled from 'styled-components';

export const StyledForm = styled.form`
  display: inline-block;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  position: relative;
`;

export const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: 1px solid burlywood;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  padding: 5px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  border: transparent;
  outline: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: burlywood;
  }
`;

export const MovieList = styled.ul`
  columns: 2;
  column-gap: 40px;
  max-width: 700px;
  display: block;
  margin: 30px auto 0;
`;
