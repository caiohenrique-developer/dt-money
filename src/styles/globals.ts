import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* Root variables */
    :root {
        --shape:#fff;
        --background:#f0f2f5;
        --text-body:#969cb3;
        --text-title:#363f5f;
        --blue-light:#6933ff;
        --blue:#5429cc;
        --red:#e52e4d;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
        
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        @media(max-width: 1080px) { font-size: 93.75%; }

        @media(max-width: 720px) { font-size: 87.5%; }
     
        body, input, textarea, button { font-weight: 400; }

        body {
            background: var(--background);
        
            button { cursor: pointer; }

            [disabled] {
                opacity: 0.6;
                cursor: not-allowed;
            }

            h1, h2, h3, h4, h5, h6, strong { font-weight: 600; }
        }
    }
`