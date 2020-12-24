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

            --bp-lightness: 13%;

            @media screen and (prefers-color-scheme: light) {
                --tcn-lightness: 3%;
                --tch-lightness: 29%;

                --lc-lightness: 23%;
                --ac-lightness: 30%;

                --bp-lightness: 88%;
            }

            --text-color-normal: hsl(var(--hue), 100%, var(--tcn-lightness));
            --text-color-highlight: hsl(var(--accent-hue), 100%, var(--tch-lightness));

            --link-color: hsl(var(--cyan-hue), 100%, var(--lc-lightness));
            --link-hover-color: hsl(var(--blue-hue), 100%, var(--lc-lightness));
            --accent-color: hsl(var(--accent-hue), 100%, var(--ac-lightness));

            --background-primary: hsl(var(--hue), 0%, var(--bp-lightness));

            --xxs: 0.25rem;
            --xs: 0.5rem;
            --s: 0.75rem;
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

        p {
            margin: var(--m) 0;
        }
    }
`

export default globals
