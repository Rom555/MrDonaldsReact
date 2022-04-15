import styled from 'styled-components';
import { ListItem } from './ListItem';
import Banner from '../../image/banner.png';
import { Preloader } from '../Style/Preloader';
import { useDB } from '../Hooks/useDB';
import { useContext } from 'react';
import { Context } from '../Context';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const BannerSection = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${Banner});
  backgrond-position: center center;
  background-size: cover;
`;

export const Menu = () => {
  const { database } = useContext(Context);
  const dbMenu = useDB(database);

  return (
    <MenuStyled>
      <BannerSection />

      {dbMenu ? (
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
          </SectionMenu>

          <SectionMenu>
            <h2>Закуски/Напитки</h2>
            <ListItem itemList={dbMenu.other} />
          </SectionMenu>
        </>
      ) : (
        <Preloader />
      )}
    </MenuStyled>
  );
};
