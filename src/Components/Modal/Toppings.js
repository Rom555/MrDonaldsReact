import {
  Wrapper as ToppingWrapper,
  Label as ToppingLabel,
  Input as ToppingInput,
} from './ModalStyled.js';

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
