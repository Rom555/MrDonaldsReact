import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import Banner from '../image/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const BannerSection = styled.section`
  width: 100%;
  height: 210px;
  background-image: url(${Banner});
  backgrond-position: center center;
  background-size: cover;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerSection />

    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски/Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);
