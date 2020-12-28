import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'
import { routesArray } from '../constants/routes'
import ThemeToggle from './navigation/ThemeToggle'

const Nav = styled.nav`
    grid-area: navigation;
    box-shadow: var(--box-shadow);
    display: grid;
    grid-template-columns: repeat(${routesArray.length}, auto) 1fr;
    padding: var(--l) var(--m);
`

const activeClassName = 'active-navlink'

const NavigationLink = styled(Link).attrs({ activeClassName })`
    padding: 0 var(--m);
    :first-of-type {
        padding-left: 0;
    }
    :last-of-type {
        padding-right: 0;
    }

    &.${activeClassName} {
        text-decoration: none;
    }
`

const Navigation: React.FunctionComponent = () => (
    <Nav>
        {routesArray.map(({ exact, path, title }, i) => (
            <NavigationLink key={i} exact={exact} to={path}>
                {title}
            </NavigationLink>
        ))}
        <ThemeToggle />
    </Nav>
)

export default Navigation
