import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-family: sans-serif;
  }
`;
