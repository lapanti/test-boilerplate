import { collect } from '@linaria/server'
import { render, screen } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Link from './Link'

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/components/Link.linaria.css'), 'utf8')

describe('<Link />', () => {
    it('should return null if no href or to', () => {
        const { container } = render(<Link />)
        expect(container.firstChild).toBeNull()
    })

    describe('as an external link', () => {
        it('should render correctly', () => {
            const href = 'https://lapanti.github.io'
            const name = 'a link'
            const { container } = render(<Link href={href}>{name}</Link>)
            expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
            expect(container.firstChild).toMatchInlineSnapshot(`
        <a
          class="s1dl0hk9"
          href="https://lapanti.github.io"
          target="_blank"
        >
          a link
        </a>
      `)
        })

        it('should match styles', () => {
            const { container } = render(<Link href="https://lapanti.github.io">a link</Link>)
            const { critical } = collect(container.innerHTML, css)
            expect(critical).toMatchInlineSnapshot(
                '".s1dl0hk9{color:var(--link-color);}.s1dl0hk9:hover{color:var(--link-hover-color);}"'
            )
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
        <a
          class="s1dl0hk9"
          href="/"
        >
          a link
        </a>
      `)
        })

        it('should match styles', () => {
            const { container } = render(
                <MemoryRouter>
                    <Link to="/">a link</Link>
                </MemoryRouter>
            )
            const { critical } = collect(container.innerHTML, css)
            expect(critical).toMatchInlineSnapshot(
                '".s1dl0hk9{color:var(--link-color);}.s1dl0hk9:hover{color:var(--link-hover-color);}"'
            )
        })
    })
})
