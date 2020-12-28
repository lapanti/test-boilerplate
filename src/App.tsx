import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import FrontPage from './app/FrontPage'
import Navigation from './app/Navigation'
import { routesObj } from './constants/routes'
import { isDarkModeSelector } from './store/ducks/theme/selectors'
import GlobalStyle from './styles/GlobalStyle'

const Page = styled.div`
    background-color: var(--background-primary);
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'navigation' 'content';
    height: 100vh;
`

const Content = styled.article`
    grid-area: content;
    display: grid;
    grid-template-columns:
        1fr
        min(65ch, calc(100% - var(--xxl)))
        1fr;
    grid-column-gap: var(--xl);
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'header'
        'main';
    overflow: auto;

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

const App: React.FunctionComponent = () => {
    const isDarkMode = useSelector(isDarkModeSelector)
    return (
        <BrowserRouter>
            <GlobalStyle isDarkMode={isDarkMode} />
            <Page>
                <Navigation />
                <Content>
                    <Switch>
                        <Route component={FrontPage} {...routesObj.whoami} />
                    </Switch>
                </Content>
            </Page>
        </BrowserRouter>
    )
}

export default App
