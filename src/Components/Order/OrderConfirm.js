import styled from 'styled-components';
import { push, ref, set } from 'firebase/database';
import { projection, toRub, totalPrice } from '../helper';
import { Overlay } from '../Modal/ModalItem';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderTitle, Total, TotalPrice } from './Order';
import { useContext } from 'react';
import { Context } from '../Context';

const Modal = styled.div`
  width: 600px;
  padding: 30px;
  background: white;
`;

const Header = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const rulesData = {
  name: ['name'],
  count: ['count'],
  price: ['price'],
  topping: [
    'topping',
    (arr) => arr.filter((item) => item.checked).map((item) => item.name),
    (arr) => (arr.length ? arr : 'no toppings'),
  ],
  choice: ['choice', (item) => (item ? item : 'no choice')],
};

export const OrderConfirm = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    database,
  } = useContext(Context);

  const totalSum = orders.reduce((sum, order) => sum + totalPrice(order), 0);

  const sendOrder = () => {
    const newOrder = orders
      .map((order) => {
        return { ...order, price: totalPrice(order) };
      })
      .map(projection(rulesData));

    const refWithKey = push(ref(database, 'orders'));

    set(refWithKey, {
      nameClient: authentication.displayName,
      email: authentication.email,
      totalSum: totalSum,
      order: newOrder,
    });

    setOrders([]);
    setOpenOrderConfirm(false);
  };

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Header>Осталось только подтвердить заказ</Header>
        <Total>
          <span>Итого</span>
          <TotalPrice>{toRub(totalSum)}</TotalPrice>
        </Total>
        <ButtonCheckout onClick={sendOrder}>Подтвердить</ButtonCheckout>
      </Modal>
    </Overlay>
  );
};
