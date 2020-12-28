import { render, screen } from '@testing-library/react'
import React from 'react'

import Header from './Header'

describe('<Header />', () => {
    it('should contain correct header', () => {
        const title = 'A title'
        const subtitle = 'A subtitle'
        render(<Header subtitle={subtitle} title={title} />)
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
        expect(screen.getByText(subtitle)).toBeInTheDocument()
    })

    it('should match snapshot', () => {
        const { container } = render(<Header subtitle="A subtitle" title="A title" />)
        expect(container.firstChild).toMatchInlineSnapshot(`
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

      <header
        class="c0"
      >
        <h1
          class="c1"
        >
          A title
        </h1>
        <p>
          A subtitle
        </p>
      </header>
    `)
    })
})
