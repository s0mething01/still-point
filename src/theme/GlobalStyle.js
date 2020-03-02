import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        color: ${({theme}) => theme.colors.primary};
    }
    html {
        font-size: 62.5%;
        @media (max-width: 1400px) {
            font-size:48%;
        }
        @media (max-width: 600px) {
            font-size: 38%;
        }
        @media (max-width: 375px) {
            font-size: 35%;
        }
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
    label {
        box-sizing: border-box;
    }
    input, textarea {
        font-family: 'Montserrat', sans-serif !important; 
        border-radius: 0 !important;
    }
`;

export default GlobalStyle;