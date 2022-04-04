import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  text-align: center;
`;

const CountButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const CountItem = ({ count, setCount, onChange }) => {
  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <CountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </CountButton>
        <CountInput disabled type='number' min='1' max='100' value={count} />
        <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
      </div>
    </CountWrapper>
  );
};
