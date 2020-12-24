import { collect } from '@linaria/server'
import { render } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import React from 'react'

import fullBleed from './fullBleed'

const css = fs.readFileSync(path.resolve('./.linaria-cache/src/styles/fullBleed.linaria.css'), 'utf8')

describe('fullBleed', () => {
    it('should match', () => {
        const { container } = render(<span className={fullBleed} />)
        const { critical } = collect(container.innerHTML, css)
        expect(critical).toMatchInlineSnapshot('".fqmljca{grid-column:1 / -1 !important;width:100%;}"')
    })
})
