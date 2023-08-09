import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-transform: uppercase;
font-family: 'Ubuntu Mono', monospace;

}

body{
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
}

`;
