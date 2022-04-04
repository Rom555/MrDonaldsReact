import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { toRub, totalPrice } from '../helper';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 10px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 100px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

export const OrderListItem = ({ order }) => {
  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{toRub(totalPrice(order))}</ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  );
};
