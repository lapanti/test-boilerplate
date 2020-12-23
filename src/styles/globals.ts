import { css } from '@linaria/core'

const globals = css`
    :global() {
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
        html {
            --hue: 180; /* Light blue */
            --accent-hue: 39; /* Orange */
            --blue-hue: 221;
            --cyan-hue: 197;

            --tcn-lightness: 97%;
            --tch-lightness: 71%;

            --lc-lightness: 77%;
            --ac-lightness: 70%;
            --ec-lightness: 50;

            --bb-lightness: 43%;

            --bp-lightness: 13%;
            --bs-lightness: 16%;

            @media screen and (prefers-color-scheme: light) {
                --tcn-lightness: 3%;
                --tch-lightness: 29%;

                --lc-lightness: 23%;
                --ac-lightness: 30%;
                --ec-lightness: 50;

                --bb-lightness: 57%;

                --bp-lightness: 88%;
                --bs-lightness: 84%;
            }

            --text-color-normal: hsl(var(--hue), 100%, var(--tcn-lightness));
            --text-color-highlight: hsl(var(--accent-hue), 100%, var(--tch-lightness));

            --link-color: hsl(var(--cyan-hue), 100%, var(--lc-lightness));
            --link-hover-color: hsl(var(--blue-hue), 100%, var(--lc-lightness));
            --accent-color: hsl(var(--accent-hue), 100%, var(--ac-lightness));
            --error-color: rgb(240, 50, var(--ec-lightness));

            --button-background: hsl(var(--hue), 63%, var(--bb-lightness));
            --button-text-color: black;

            --background-primary: hsl(var(--hue), 0%, var(--bp-lightness));
            --background-secondary: hsl(var(--hue), 0%, var(--bs-lightness));

            --m: 1rem;
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
    }
`

export default globals
