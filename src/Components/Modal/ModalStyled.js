import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  display: inline-block;
  width: 50%;
  & span {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
