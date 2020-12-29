import type { FlattenSimpleInterpolation } from 'styled-components'
import { css } from 'styled-components'

const fullBleed = (width?: string): FlattenSimpleInterpolation => css`
    grid-column: 1 / -1 !important;
    width: ${width || '100%'};
`

export default fullBleed
