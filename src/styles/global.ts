import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #536287;
        --primary-alt: #8093C5;
        --secondary: #575656;
        --secondary-alt: #C9C3C3;
        --light: #F9F9F9;
        --light-alt: #E5E1E1;
        --dark:  #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background: var(--light);
        -webkit-font-smoothing: antialiased;
        overflow: auto !important;
    }

    body, input, textarea, button {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    p, ul {
        margin: 0;
    }
`;
