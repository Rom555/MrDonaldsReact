import styled from 'styled-components';
import { ListItem } from './ListItem';
import Banner from '../../image/banner.png';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Style/Preloader';

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

export const Menu = ({ setOpenItem }) => {
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <BannerSection />

      {dbMenu ? (
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>

          <SectionMenu>
            <h2>Закуски/Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </>
      ) : res.error ? (
        <div>Скоро мы исправим эту ошибку</div>
      ) : (
        <Preloader />
      )}
    </MenuStyled>
  );
};
