import { render } from '@testing-library/react'
import React from 'react'

import Main from './Main'

describe('<Main />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Main>main</Main>)
        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              grid-area: main;
              display: grid;
              grid-template-columns: 1fr min(65ch,calc(100% - var(--xxl))) 1fr;
              grid-column-gap: var(--xl);
              grid-auto-rows: minmax(min-content,max-content);
            }

            .c0 > * {
              grid-column: 2;
            }

            @media (min-width:660px) {
              .c0 {
                grid-template-columns: 1fr min(65ch,100%) 1fr;
                grid-column-gap: normal;
              }
            }

            <main
              class="c0"
            >
              main
            </main>
        `)
    })
})
