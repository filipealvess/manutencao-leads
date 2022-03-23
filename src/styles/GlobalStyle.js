import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
  
  html { font-size: 10px; }
  
  body {
    background-color: ${({ theme }) => theme.pageBackground};
  }
`;

export default GlobalStyle;
