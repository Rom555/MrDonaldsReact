import styled from 'styled-components';
import { toRub, totalPrice } from '../helper';
import { useChoice } from '../Hooks/useChoice';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { Choice } from './Choice';
import { CountItem } from './CountItem';
import { Toppings } from './Toppings';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px 40px;
  height: calc(100% - 200px);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choice = useChoice();
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    if (e.target.id === 'overlay') setOpenItem(null);
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choice.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalContent>
          <ModalHeader>
            <h3>{openItem.name}</h3>
            <h3>{toRub(openItem.price)}</h3>
          </ModalHeader>
          <CountItem {...counter} />
          {!!openItem.toppings.length && <Toppings {...toppings} />}
          {openItem.choices && <Choice {...choice} openItem={openItem} />}
          <TotalPrice>
            <span>Итоговая цена:</span>
            <span>{toRub(totalPrice(order))}</span>
          </TotalPrice>
          <ButtonCheckout
            disabled={openItem.choices && !choice.choice}
            onClick={isEdit ? editOrder : addToOrder}
          >
            {isEdit ? 'Редактировать' : 'Добавить'}
          </ButtonCheckout>
        </ModalContent>
      </Modal>
    </Overlay>
  );
};
