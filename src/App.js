import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: Roboto, sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico, sans-serif;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
