import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 250px;
  height: 65px;
  background: #299b01;
  border-color: transparent;
  color: #fff;
  font-size: 21px;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:not(:disabled):hover {
    background: #fff;
    border-color: #299b01;
    color: #299b01;
  }
  &:disabled {
    background: #fff;
    border-color: grey;
    color: grey;
    cursor: default;
  }
`;
