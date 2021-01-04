import { render } from '@testing-library/react'
import React from 'react'

import Highlight from './Highlight'

describe('<Highlight />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Highlight>test</Highlight>)
        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              color: var(--text-color-highlight);
            }

            <span
              class="c0"
            >
              test
            </span>
        `)
    })
})
