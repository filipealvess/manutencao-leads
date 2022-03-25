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
    list-style: none;
    box-sizing: border-box;
    transition-duration: 0.3s;
    transition-property: background-color, color, border-color;
  }
  
  button {
    cursor: pointer;
  }
  
  html {
    font-size: 10px;
    
    @media (max-width: 600px) {
      font-size: 9px;
    }
  }
  
  body {
    background-color: ${({ theme }) => theme.pageBackground};
  }
`;

export default GlobalStyle;
