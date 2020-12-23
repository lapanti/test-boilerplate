import { collect } from '@linaria/server'
import { render, screen } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'

import Header from './Header'

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/components/Header.linaria.css'), 'utf8')

describe('<Header />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Header subtitle="A subtitle" title="A title" />)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="swue83p"
      >
        <h1
          class="hfrfs33"
        >
          A title
        </h1>
        <p>
          A subtitle
        </p>
      </header>
    `)
    })

    it('should match styles', () => {
        const { container } = render(<Header subtitle="A subtitle" title="A title" />)
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot(
            '".swue83p{color:var(--accent-color);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:var(--l) 0;}.hfrfs33{margin:0;}"'
        )
    })

    it('should contain correct header', () => {
        const title = 'A title'
        const subtitle = 'A subtitle'
        render(<Header subtitle={subtitle} title={title} />)
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
        expect(screen.getByText(subtitle)).toBeInTheDocument()
    })
})
