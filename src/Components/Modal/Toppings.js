import styled from 'styled-components';

const ToppingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ToppingLabel = styled.label`
  display: inline-block;
  width: 50%;
  & span {
    cursor: pointer;
  }
`;

const ToppingInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const Toppings = ({ toppings, checkToppings }) => (
  <>
    <h3>Добавки</h3>
    <ToppingWrapper>
      {toppings.map((item, i) => (
        <ToppingLabel key={i}>
          <ToppingInput
            type='checkbox'
            checked={item.checked}
            onChange={() => checkToppings(i)}
          />
          <span>{item.name}</span>
        </ToppingLabel>
      ))}
    </ToppingWrapper>
  </>
);
