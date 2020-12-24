import { collect } from '@linaria/server'
import { render } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

jest.mock('./app/FrontPage', () => () => <span>frontPage</span>)

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/App.linaria.css'), 'utf8')

describe('<App />', () => {
    it('should render FrontPage on base path', () => {
        const { container } = render(
            <MemoryRouter initialEntries={[{ pathname: '/' }]}>
                <App />
            </MemoryRouter>
        )
        expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="g8stnzc puwg8pj"
      >
        <span>
          frontPage
        </span>
      </div>
    `)
    })

    it('should render correct styles', () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot(
            '".puwg8pj{background-color:var(--background-primary);display:grid;grid-template-columns: 1fr min(65ch,calc(100% - var(--xxl))) 1fr;grid-column-gap:var(--xl);}@media (min-width:660px){.puwg8pj{grid-template-columns: 1fr min(65ch,100%) 1fr;grid-column-gap:normal;}}.puwg8pj > *{grid-column:2;}"'
        )
    })
})
