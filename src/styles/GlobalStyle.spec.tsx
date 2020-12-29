import { render } from '@testing-library/react'
import React from 'react'

import GlobalStyle from './GlobalStyle'

describe('globals', () => {
    it('should render darkMode', () => {
        render(<GlobalStyle isDarkMode />)
        const styleTags = document.head.getElementsByTagName('style')
        expect(styleTags[styleTags.length - 1]).toMatchInlineSnapshot(`
            <style
              data-styled="active"
              data-styled-version="5.2.1"
            >
              html{--hue:180;--accent-hue:39;--blue-hue:221;--cyan-hue:197;--tcn-lightness:97%;--tch-lightness:71%;--lc-lightness:77%;--ac-lightness:70%;--bp-lightness:13%;--bs-lightness:19%;--text-color-normal:hsl(var(--hue),100%,var(--tcn-lightness));--text-color-highlight:hsl(var(--accent-hue),100%,var(--tch-lightness));--text-color-darker:hsla(var(--hue),100%,var(--tcn-lightness),50%);--link-color:hsl(var(--cyan-hue),100%,var(--lc-lightness));--link-hover-color:hsl(var(--blue-hue),100%,var(--lc-lightness));--accent-color:hsl(var(--accent-hue),100%,var(--ac-lightness));--background-primary:hsl(var(--hue),0%,var(--bp-lightness));--background-secondary:hsl(var(--hue),0%,var(--bs-lightness));--box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);--xxs:0.25rem;--xs:0.5rem;--s:0.75rem;--m:1rem;--xm:1.25rem;--l:1.5rem;--xl:2rem;--xxl:4rem;box-sizing:border-box;color:var(--text-color-normal);font-family:'Fira Code',sans-serif;font-size:16px;}
              body{margin:0;}
              p{margin:var(--m) 0;}
            </style>
        `)
    })

    it('should render lightMode', () => {
        render(<GlobalStyle isDarkMode={false} />)
        const styleTags = document.head.getElementsByTagName('style')
        expect(styleTags[styleTags.length - 1]).toMatchInlineSnapshot(`
            <style
              data-styled="active"
              data-styled-version="5.2.1"
            >
              html{--hue:180;--accent-hue:39;--blue-hue:221;--cyan-hue:197;--tcn-lightness:3%;--tch-lightness:29%;--lc-lightness:23%;--ac-lightness:30%;--bp-lightness:87%;--bs-lightness:81%;--text-color-normal:hsl(var(--hue),100%,var(--tcn-lightness));--text-color-highlight:hsl(var(--accent-hue),100%,var(--tch-lightness));--text-color-darker:hsla(var(--hue),100%,var(--tcn-lightness),50%);--link-color:hsl(var(--cyan-hue),100%,var(--lc-lightness));--link-hover-color:hsl(var(--blue-hue),100%,var(--lc-lightness));--accent-color:hsl(var(--accent-hue),100%,var(--ac-lightness));--background-primary:hsl(var(--hue),0%,var(--bp-lightness));--background-secondary:hsl(var(--hue),0%,var(--bs-lightness));--box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);--xxs:0.25rem;--xs:0.5rem;--s:0.75rem;--m:1rem;--xm:1.25rem;--l:1.5rem;--xl:2rem;--xxl:4rem;box-sizing:border-box;color:var(--text-color-normal);font-family:'Fira Code',sans-serif;font-size:16px;}
              body{margin:0;}
              p{margin:var(--m) 0;}
            </style>
        `)
    })
})
