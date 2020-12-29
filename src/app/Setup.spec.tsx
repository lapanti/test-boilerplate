import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Setup from './Setup'

describe('<Setup />', () => {
    it('should contain correct header', () => {
        render(
            <MemoryRouter>
                <Setup />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /Setup/i })).toBeInTheDocument()
        expect(screen.getByText('how I code')).toBeInTheDocument()
    })

    it('should contain the important links', () => {
        render(
            <MemoryRouter>
                <Setup />
            </MemoryRouter>
        )
        expect(screen.getByRole('link', { name: /WSL/i })).toHaveAttribute(
            'href',
            'https://docs.microsoft.com/en-us/windows/wsl/'
        )
        expect(screen.getByRole('link', { name: /VS Code/i })).toHaveAttribute('href', 'https://code.visualstudio.com/')
        expect(screen.getByRole('link', { name: /Fira Code/i })).toHaveAttribute(
            'href',
            'https://github.com/tonsky/FiraCode'
        )
        expect(screen.getByRole('link', { name: /Terminal/i })).toHaveAttribute(
            'href',
            'https://github.com/microsoft/terminal'
        )
    })

    it('should match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <Setup />
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
                  Setup
                </h1>
                <p>
                  how I code
                </p>
              </header>
              <main
                class="c2"
              >
                <p>
                  Nowadays I code all my stuff in Windows, using
                   
                  <a
                    class="c3"
                    href="https://docs.microsoft.com/en-us/windows/wsl/"
                    target="_blank"
                  >
                    WSL
                  </a>
                  . I used to work with a MacBook, but I got tired of having to switch from Apple (work) to Windows (home) and now I only have one environment (and one computer) for all my needs. I've been using WSL from (almost) day one it came out to the public, and although it has it's problems, I have been very happy with it.
                </p>
                <p>
                  My main editor is (surprise surprise) 
                  <a
                    class="c3"
                    href="https://code.visualstudio.com/"
                    target="_blank"
                  >
                    VS Code
                  </a>
                  . It has good integration with WSL (since WSL 2), so I can actually keep my code inside the linux kernel and still write the code in a Windows application. As the look and feel is important to me, the first thing I always install on a new computer (after VS Code etc) is
                   
                  <a
                    class="c3"
                    href="https://github.com/tonsky/FiraCode"
                    target="_blank"
                  >
                    Fira Code
                  </a>
                   for my typography and
                   
                  <a
                    class="c3"
                    href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"
                    target="_blank"
                  >
                    the Material Theme
                  </a>
                   
                  for VS Code (using Darker, which is actually what I based my color scheme on this page on).
                </p>
                <p>
                  For all my console needs I use 
                  <a
                    class="c3"
                    href="https://github.com/microsoft/terminal"
                    target="_blank"
                  >
                    Terminal
                  </a>
                   by Microsoft. Mainly all 
                  <code>
                    npm
                  </code>
                   (and sometimes Docker) related things as well as 
                  <code>
                    git
                  </code>
                   
                  things (I use 
                  <code>
                    nano
                  </code>
                   for everything else, but for git I use 
                  <code>
                    vim
                  </code>
                  , crazy I know). I spice it up with zsh, oh-my-zsh nad some very nice aliases.
                </p>
              </main>
            </div>
        `)
    })
})
