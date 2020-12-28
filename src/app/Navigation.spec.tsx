import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { routesArray } from '../constants/routes'
import Navigation from './Navigation'

jest.mock('./navigation/ThemeToggle', () => () => <span>theme toggle</span>)

describe('<Navigation />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        )

        routesArray.forEach(({ title, path }) =>
            expect(screen.getByRole('link', { name: title })).toHaveAttribute('href', path)
        )

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c1 {
              color: var(--link-color);
            }

            .c1:hover {
              color: var(--link-hover-color);
            }

            .c0 {
              grid-area: navigation;
              box-shadow: var(--box-shadow);
              display: grid;
              grid-template-columns: repeat(3,auto) 1fr;
              padding: var(--l) var(--m);
            }

            .c2 {
              padding: 0 var(--m);
            }

            .c2:first-of-type {
              padding-left: 0;
            }

            .c2:last-of-type {
              padding-right: 0;
            }

            .c2.active-navlink {
              -webkit-text-decoration: none;
              text-decoration: none;
            }

            <nav
              class="c0"
            >
              <a
                aria-current="page"
                class="c1 c2 active-navlink"
                href="/"
              >
                whoami
              </a>
              <a
                class="c1 c2"
                href="/cv"
              >
                CV
              </a>
              <a
                class="c1 c2"
                href="/setup"
              >
                setup
              </a>
              <span>
                theme toggle
              </span>
            </nav>
        `)
    })
})
