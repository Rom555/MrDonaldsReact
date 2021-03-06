import { useContext, useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { Context } from '../Context';
import { toRub, totalPrice } from '../helper';

const OrderItemStyled = styled.li`
  margin: 10px 0;
  cursor: pointer;
`;

const OrderHead = styled.div`
  display: flex;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 10px;
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

const Toppings = styled.div`
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;
  max-width: 320px;
`;

export const OrderListItem = ({ order, deleteOrder, index }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);
  const refDeleteButton = useRef(null);

  return (
    <>
      <OrderItemStyled
        onClick={(e) =>
          e.target !== refDeleteButton.current && setOpenItem({ ...order, index })
        }
      >
        <OrderHead>
          <ItemName>
            {order.name} {order.choice}
          </ItemName>
          <span>{order.count}</span>
          <ItemPrice>{toRub(totalPrice(order))}</ItemPrice>
          <TrashButton ref={refDeleteButton} onClick={() => !deleteOrder(index)} />
        </OrderHead>

        {order.topping && (
          <Toppings>
            {order.topping
              .filter((item) => item.checked)
              .map((item) => item.name)
              .join(', ')}
          </Toppings>
        )}
      </OrderItemStyled>
    </>
  );
};
