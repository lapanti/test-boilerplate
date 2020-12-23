import { styled } from '@linaria/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link = styled(ReactRouterLink)`
    color: var(--link-color);

    :hover {
        color: var(--link-hover-color);
    }
`

export default Link
