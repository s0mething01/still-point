import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        color: ${({theme}) => theme.colors.primary}
    }
    html {
        font-size: 62.5%;
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        font-family: 'Montserrat', sans-serif;
        background-color: transparent;
        border: none;
    }
`;

export default GlobalStyle;