import { collect } from '@linaria/server'
import { render } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'

import Main from './Main'

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/components/Main.linaria.css'), 'utf8')

describe('<Main />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Main>main</Main>)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="m9ku3w5"
      >
        main
      </main>
    `)
    })

    it('should match styles', () => {
        const { container } = render(<Main>main</Main>)
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot('".m9ku3w5{min-height:100vh;}"')
    })
})
