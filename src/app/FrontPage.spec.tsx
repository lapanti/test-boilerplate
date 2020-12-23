import { render, screen } from '@testing-library/react'
import React from 'react'

import FrontPage from './FrontPage'

jest.mock('./Main', () => () => <span>main</span>)

describe('<FrontPage />', () => {
    it('should match snapshot', () => {
        const { container } = render(<FrontPage />)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="swue83p"
      >
        <h1
          class="hfrfs33"
        >
          Lauri Lavanti
        </h1>
        <p>
          Who dis?
        </p>
      </header>
    `)
    })

    it('should contain correct header', () => {
        render(<FrontPage />)
        expect(screen.getByRole('heading', { name: /Lauri Lavanti/i })).toBeInTheDocument()
        expect(screen.getByText('Who dis?')).toBeInTheDocument()
    })
})
