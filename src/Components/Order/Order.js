import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import { toRub, totalPrice } from '../helper';
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

export const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  margin-left: 15px;
  text-align: right;
  min-width: 100px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const totalSum = orders.reduce((sum, order) => sum + totalPrice(order), 0);
  const totalCount = orders.reduce((sum, order) => sum + order.count, 0);

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
        onClick={() => {
          if (authentication) setOpenOrderConfirm(true);
          else logIn();
        }}
      >
        Оформить
      </ButtonCheckout>
    </OrderStyled>
  );
};
