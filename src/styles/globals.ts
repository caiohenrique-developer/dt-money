import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* Root variables */
    :root {
        --shape:#fff;
        --green:#33cc95;
        --background:#f0f2f5;
        --text-body:#969cb3;
        --text-title:#363f5f;
        --blue-light:#6933ff;
        --blue:#5429cc;
        --red:#e52e4d;
        --border:#d7d7d7;
        --input-bkg:#e7e9ee;
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

            .react-modal-overlay {
                display: flex;
                align-items: center;
                justify-content: center;

                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;

                background: rgba(0,0,0,0.5);
            }

            .react-modal-content {
                position: relative;

                max-width: 576px;
                width: 100%;
                background: var(--background);
                padding: 3rem;
                border-radius: 0.24rem;
            }

            .react-close-icon {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;

                font-size: 0;
                background: transparent;
                transition: .2s;

                &:hover {
                    transform: rotate(270deg);
                    filter: brightness(0.5);
                }
            }
        }
    }
`