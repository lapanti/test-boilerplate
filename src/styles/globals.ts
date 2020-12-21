import { css } from '@linaria/core'

const globals = css`
    :global() {
        @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@300;400;500&display=swap');
        html {
            --hue: 0; /* Yellow */
            --accent-hue: 40; /* Orange */

            --tcn-lightness: 88%;
            --tch-lightness: 45%;

            --lc-lightness: 70%;
            --ac-lightness: 70%;
            --ec-lightness: 50;

            --bb-lightness: 43%;

            --bp-lightness: 12%;
            --bs-lightness: 16%;

            @media screen and (prefers-color-scheme: light) {
                --tcn-lightness: 12%;
                --tch-lightness: 55%;

                --lc-lightness: 30%;
                --ac-lightness: 30%;
                --ec-lightness: 50;

                --bb-lightness: 57%;

                --bp-lightness: 88%;
                --bs-lightness: 84%;
            }

            --text-color-normal: hsl(var(--hue), 10%, var(--tcn-lightness));
            --text-color-highlight: hsl(var(--accent-hue), 70%, var(--tch-lightness));

            --link-color: hsl(var(--hue), 90%, var(--lc-lightness));
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

            color: var(--text-color-normal);
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
        }

        body {
            margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Ubuntu', sans-serif;
        }
    }
`

export default globals
