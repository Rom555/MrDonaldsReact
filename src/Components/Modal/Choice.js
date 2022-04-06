import {
  Wrapper as ChoiceWrapper,
  Label as ChoiceLabel,
  Input as ChoiceInput,
} from './ModalStyled.js';

export const Choice = ({ openItem, choice, changeChoice }) => (
  <>
    <h3>Выбирайте</h3>
    <ChoiceWrapper>
      {openItem.choices.map((item, i) => (
        <ChoiceLabel key={i}>
          <ChoiceInput
            type='radio'
            name='choice'
            checked={choice === item}
            value={item}
            onChange={changeChoice}
          />
          <span>{item}</span>
        </ChoiceLabel>
      ))}
    </ChoiceWrapper>
  </>
);
