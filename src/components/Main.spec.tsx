import { render } from '@testing-library/react'
import React from 'react'

import Main from './Main'

describe('<Main />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Main>main</Main>)
        expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        grid-area: main;
      }

      <main
        class="c0"
      >
        main
      </main>
    `)
    })
})
