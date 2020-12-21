import { styled } from '@linaria/react'
import React from 'react'

import fullBleed from '../styles/fullBleed'

const StyledHeader = styled.header`
    background-color: var(--background-secondary);
    box-shadow: 0px 4px 5px -3px var(--background-secondary);
    color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--l) 0;
`

const H1 = styled.h1`
    margin: 0;
`

const Header: React.FunctionComponent = () => (
    <StyledHeader className={fullBleed}>
        <H1>Lauri Lavanti</H1>
    </StyledHeader>
)

export default Header
