import styled from 'styled-components';
import { toRub } from '../helper';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  z-index: 1;
  width: 400px;
  height: 155px;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center center;
  background-size: cover;
  color: white;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 50px 30px rgba(0, 0, 0, 0.2);
    &:after {
      opacity: 0.1;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{toRub(item.price)}</p>
      </Item>
    ))}
  </List>
);
