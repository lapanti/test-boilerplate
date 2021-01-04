import { createGlobalStyle, css } from 'styled-components'

const darkMode = css`
    --tcn-lightness: 97%;
    --tch-lightness: 71%;

    --lc-lightness: 77%;
    --ac-lightness: 70%;

    --bp-lightness: 13%;
    --bs-lightness: 19%;
`

const lightMode = css`
    --tcn-lightness: 3%;
    --tch-lightness: 29%;

    --lc-lightness: 23%;
    --ac-lightness: 30%;

    --bp-lightness: 87%;
    --bs-lightness: 81%;
`

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
        html {
            --hue: 180; /* Light blue */
            --accent-hue: 39; /* Orange */
            --blue-hue: 221;
            --cyan-hue: 197;

            ${({ isDarkMode }) => (isDarkMode ? darkMode : lightMode)}

            --text-color-normal: hsl(var(--hue), 100%, var(--tcn-lightness));
            --text-color-highlight: hsl(var(--accent-hue), 100%, var(--tch-lightness));
            --text-color-darker: hsla(var(--hue), 100%, var(--tcn-lightness), 50%);

            --link-color: hsl(var(--cyan-hue), 100%, var(--lc-lightness));
            --link-hover-color: hsl(var(--blue-hue), 100%, var(--lc-lightness));
            --accent-color: hsl(var(--accent-hue), 100%, var(--ac-lightness));

            --background-primary: hsl(var(--hue), 0%, var(--bp-lightness));
            --background-secondary: hsl(var(--hue), 0%, var(--bs-lightness));

            --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

            --xxs: 0.25rem;
            --xs: 0.5rem;
            --s: 0.75rem;
            --m: 1rem;
            --xm: 1.25rem;
            --l: 1.5rem;
            --xl: 2rem;
            --xxl: 4rem;

            box-sizing: border-box;
            color: var(--text-color-normal);
            font-family: 'Fira Code', sans-serif;
            font-size: 16px;
        }

        body {
            margin: 0;
        }

        p {
            margin: var(--m) 0;
        }

        h1 {
            font-size: var(--l);
        }

        h2 {
            font-size: var(--xm);
        }
`

export default GlobalStyle
