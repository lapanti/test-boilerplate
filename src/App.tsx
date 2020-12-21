import { styled } from '@linaria/react'
import React from 'react'

import Header from './app/Header'
import Main from './app/Main'
import globals from './styles/globals'

const Page = styled.div`
    background-color: var(--background-primary);
    display: grid;
    grid-template-columns:
        1fr
        min(65ch, calc(100% - var(--xxl)))
        1fr;
    grid-column-gap: var(--xl);

    @media (min-width: 660px) {
        grid-template-columns:
            1fr
            min(65ch, 100%)
            1fr;
        grid-column-gap: normal;
    }

    & > * {
        grid-column: 2;
    }
`

const App: React.FunctionComponent = () => (
    <Page className={globals}>
        <Header />
        <Main />
    </Page>
)

export default App
