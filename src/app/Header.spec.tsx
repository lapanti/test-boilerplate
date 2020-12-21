import { collect } from '@linaria/server'
import { render, screen } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'

import Header from './Header'

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/app/Header.linaria.css'), 'utf8')

describe('<Header />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Header />)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="fqmljca sn3lshr"
      >
        <h1
          class="hyow7ju"
        >
          Lauri Lavanti
        </h1>
      </header>
    `)
    })

    it('should match styles', () => {
        const { container } = render(<Header />)
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot(
            '".sn3lshr{background-color:var(--background-secondary);box-shadow:0px 4px 5px -3px var(--background-secondary);color:var(--accent-color);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:var(--l) 0;}.hyow7ju{margin:0;}"'
        )
    })

    it('should contain correct header', () => {
        render(<Header />)
        expect(screen.getByRole('heading', { name: /Lauri Lavanti/i })).toBeInTheDocument()
    })
})
