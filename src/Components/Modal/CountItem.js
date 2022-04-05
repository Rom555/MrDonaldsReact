import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  height: 27px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #000;
  text-align: center;
`;

const CountButton = styled.button`
  width: 27px;
  height: 27px;
  background-color: #c4c4c4;
  border: none;
  text-align: center;
`;

export const CountItem = ({ count, setCount }) => {
  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <CountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </CountButton>
        <CountInput disabled type='text' min='1' max='100' value={count} />
        <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
      </div>
    </CountWrapper>
  );
};
