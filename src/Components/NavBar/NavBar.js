import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LogInBtn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Figure = styled.figure`
  margin: 0 15px;
  & img {
    max-width: 40px;
    max-height: 40px;
  }
`;

const LogOutBtn = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonalds</H1>
    </Logo>
    {authentication ? (
      <div>
        <User>
          <Figure>
            <img
              src={authentication.reloadUserInfo.photoUrl}
              alt={authentication.displayName}
            />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>

          <LogOutBtn onClick={logOut}>X</LogOutBtn>
        </User>
      </div>
    ) : (
      <LogInBtn onClick={logIn}>
        <Figure>
          <img src={signImg} alt='войти' />
          <figcaption>войти</figcaption>
        </Figure>
      </LogInBtn>
    )}
  </NavBarStyled>
);
