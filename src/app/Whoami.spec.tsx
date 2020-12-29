import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Whoami from './Whoami'

describe('<Whoami />', () => {
    it('should contain correct header', () => {
        render(
            <MemoryRouter>
                <Whoami />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /Lauri Lavanti/i })).toBeInTheDocument()
        expect(screen.getByText('whoami')).toBeInTheDocument()
    })

    it('should contain the important links', () => {
        render(
            <MemoryRouter>
                <Whoami />
            </MemoryRouter>
        )
        expect(screen.getByRole('link', { name: /some experience/i })).toHaveAttribute('href', '/cv')
        expect(screen.getByRole('link', { name: /code of this page/i })).toHaveAttribute(
            'href',
            'https://github.com/lapanti/lapanti.github.io'
        )
    })

    it('should match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <Whoami />
            </MemoryRouter>
        )
        expect(container).toMatchInlineSnapshot(`
            .c0 {
              grid-area: header;
              color: var(--accent-color);
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              padding: var(--l) 0;
            }

            .c1 {
              margin: 0;
            }

            .c3 {
              color: var(--link-color);
            }

            .c3:hover {
              color: var(--link-hover-color);
            }

            .c2 {
              grid-area: main;
              display: grid;
              grid-template-columns: 1fr min(65ch,calc(100% - var(--xxl))) 1fr;
              grid-column-gap: var(--xl);
              grid-auto-rows: minmax(min-content,max-content);
            }

            .c2 > * {
              grid-column: 2;
            }

            @media (min-width:660px) {
              .c2 {
                grid-template-columns: 1fr min(65ch,100%) 1fr;
                grid-column-gap: normal;
              }
            }

            <div>
              <header
                class="c0"
              >
                <h1
                  class="c1"
                >
                  Lauri Lavanti
                </h1>
                <p>
                  whoami
                </p>
              </header>
              <main
                class="c2"
              >
                <p>
                  Hello World!
                </p>
                <p>
                  I am a developer with 
                  <a
                    class="c3"
                    href="/cv"
                  >
                    some experience
                  </a>
                   in the field (including consulting and product business). My main concern is with the front end of things (and UX).
                </p>
                <p>
                  My main stack (for now) is with TypeScript, React, redux and all things that go with them. For styling I mainly use styled-components or other libraries with similar syntax. For now, I've found that
                   
                  <a
                    class="c3"
                    href="https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af"
                    target="_blank"
                  >
                    the Fractal pattern
                  </a>
                   
                  is the only way to keep a large project logical. As an example, you can look at the
                   
                  <a
                    class="c3"
                    href="https://github.com/lapanti/lapanti.github.io"
                    target="_blank"
                  >
                    code of this page
                  </a>
                  , to see what I'm talking about.
                </p>
                <p>
                  I am currently happily employed, but if you still want to check them out, here's my
                   
                  <a
                    class="c3"
                    href="https://github.com/lapanti"
                    target="_blank"
                  >
                    Github
                  </a>
                   and
                   
                  <a
                    class="c3"
                    href="https://www.linkedin.com/in/lapanti/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  . I also have a
                   
                  <a
                    class="c3"
                    href="https://twitter.com/laurilavanti"
                    target="_blank"
                  >
                    Twitter
                  </a>
                  -account (my handle is taken there 😢), but I mainly use it to stay up-to-date on things.
                </p>
                <p>
                  I think later I will maybe do some writing here, but we shall see how much time I have on my hands (with two kids and a dog).
                </p>
              </main>
            </div>
        `)
    })
})
