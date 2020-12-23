import { styled } from '@linaria/react'
import React from 'react'

const StyledHeader = styled.header`
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
