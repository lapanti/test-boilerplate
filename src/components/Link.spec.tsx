import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Link from './Link'

describe('<Link />', () => {
    it('should return null if no href or to', () => {
        const { container } = render(<Link />)
        expect(container.firstChild).toBeNull()
    })

    describe('as an internal navlink', () => {
        it('should render correctly', () => {
            const acn = 'active'

            const activeTo = '/'
            const activeName = 'an active link'
            const inactiveTo = '/test'
            const inactiveName = 'an inactive link'
            const { container } = render(
                <MemoryRouter initialEntries={[{ pathname: '/' }]}>
                    <Link activeClassName={acn} to={activeTo}>
                        {activeName}
                    </Link>
                    <Link activeClassName={acn} to={inactiveTo}>
                        {inactiveName}
                    </Link>
                </MemoryRouter>
            )

            const activeLink = screen.getByRole('link', { name: activeName })
            expect(activeLink).toHaveAttribute('href', activeTo)
            expect(activeLink.className).toContain(acn)

            const inactiveLink = screen.getByRole('link', { name: inactiveName })
            expect(inactiveLink).toHaveAttribute('href', inactiveTo)
            expect(inactiveLink.className).not.toContain(acn)

            expect(container.firstChild).toMatchInlineSnapshot(`
        .c0 {
          color: var(--link-color);
        }

        .c0:hover {
          color: var(--link-hover-color);
        }

        <a
          aria-current="page"
          class="c0 active"
          href="/"
        >
          an active link
        </a>
      `)
        })
    })

    describe('as an internal link', () => {
        it('should render correctly', () => {
            const to = '/'
            const name = 'a link'
            const { container } = render(
                <MemoryRouter>
                    <Link to={to}>{name}</Link>
                </MemoryRouter>
            )
            expect(screen.getByRole('link', { name })).toHaveAttribute('href', to)
            expect(container.firstChild).toMatchInlineSnapshot(`
        .c0 {
          color: var(--link-color);
        }

        .c0:hover {
          color: var(--link-hover-color);
        }

        <a
          class="c0"
          href="/"
        >
          a link
        </a>
      `)
        })
    })

    describe('as an external link', () => {
        it('should render correctly', () => {
            const href = 'https://lapanti.github.io'
            const name = 'a link'
            const { container } = render(<Link href={href}>{name}</Link>)
            expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
            expect(container.firstChild).toMatchInlineSnapshot(`
        .c0 {
          color: var(--link-color);
        }

        .c0:hover {
          color: var(--link-hover-color);
        }

        <a
          class="c0"
          href="https://lapanti.github.io"
          target="_blank"
        >
          a link
        </a>
      `)
        })
    })
})
