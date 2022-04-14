import { getDatabase, push, ref, set } from 'firebase/database';
import styled from 'styled-components';
import { projection, toRub, totalPrice } from '../helper';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  height: calc(100% - 80px);
  background: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  margin-left: 15px;
  text-align: right;
  min-width: 100px;
`;

const EmptyList = styled.p`
  text-align: center;
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

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentication,
  logIn,
  database,
}) => {
  const totalSum = orders.reduce((sum, order) => sum + totalPrice(order), 0);
  const totalCount = orders.reduce((sum, order) => sum + order.count, 0);

  const sendOrder = () => {
    const newOrder = orders
      .map((order) => {
        return { ...order, price: totalPrice(order) };
      })
      .map(projection(rulesData));

    const database = getDatabase();
    const refWithKey = push(ref(database, 'orders'));

    set(refWithKey, {
      nameClient: authentication.displayName,
      email: authentication.email,
      totalSum: totalSum,
      order: newOrder,
    });

    setOrders([]);
  };

  const deleteOrder = (index) => {
    setOrders(orders.filter((order, i) => i !== index));
  };

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem
                key={index}
                order={order}
                deleteOrder={deleteOrder}
                index={index}
                setOpenItem={setOpenItem}
              />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCount}</span>
        <TotalPrice>{toRub(totalSum)}</TotalPrice>
      </Total>
      <ButtonCheckout
        disabled={!orders.length}
        onClick={authentication ? sendOrder : logIn}
      >
        Оформить
      </ButtonCheckout>
    </OrderStyled>
  );
};
