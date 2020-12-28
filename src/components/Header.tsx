import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    grid-area: header;
    color: var(--accent-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--l) 0;
`

const H1 = styled.h1`
    margin: 0;
`

interface HeaderProps {
    title: string
    subtitle: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ title, subtitle }) => (
    <StyledHeader>
        <H1>{title}</H1>
        <p>{subtitle}</p>
    </StyledHeader>
)

export default Header
