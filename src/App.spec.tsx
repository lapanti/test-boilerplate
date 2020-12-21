import { collect } from '@linaria/server'
import { render } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'

import App from './App'

jest.mock('./app/Header', () => () => <span>header</span>)
jest.mock('./app/Main', () => () => <span>main</span>)

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/App.linaria.css'), 'utf8')

describe('<App />', () => {
    it('should match snapshot', () => {
        const { container } = render(<App />)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="g8stnzc puwg8pj"
      >
        <span>
          header
        </span>
        <span>
          main
        </span>
      </div>
    `)
    })

    it('should render correct styles', () => {
        const { container } = render(<App />)
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot(
            '".puwg8pj{background-color:var(--background-primary);display:grid;grid-template-columns: 1fr min(65ch,calc(100% - var(--xxl))) 1fr;grid-column-gap:var(--xl);}@media (min-width:660px){.puwg8pj{grid-template-columns: 1fr min(65ch,100%) 1fr;grid-column-gap:normal;}}.puwg8pj > *{grid-column:2;}"'
        )
    })
})
