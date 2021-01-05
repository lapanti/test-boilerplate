import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import CV from './app/CV'
import Navigation from './app/Navigation'
import ScrollToTop from './app/ScrollToTop'
import Setup from './app/Setup'
import Whoami from './app/Whoami'
import { routesObj } from './constants/routes'
import { isDarkModeSelector } from './store/ducks/theme/selectors'
import GlobalStyle from './styles/GlobalStyle'

const Page = styled.div`
    background-color: var(--background-primary);
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'navigation' 'content';
    min-height: calc(100vh - var(--xxl));
    padding-bottom: var(--xxl);
`

const Content = styled.article`
    grid-area: content;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'header'
        'main';
    overflow: auto;
`

const App: React.FunctionComponent = () => {
    const isDarkMode = useSelector(isDarkModeSelector)
    return (
        <BrowserRouter>
            <GlobalStyle isDarkMode={isDarkMode} />
            <ScrollToTop />
            <Page>
                <Navigation />
                <Content>
                    <Switch>
                        <Route component={Whoami} {...routesObj.whoami} />
                        <Route component={CV} {...routesObj.cv} />
                        <Route component={Setup} {...routesObj.setup} />
                    </Switch>
                </Content>
            </Page>
        </BrowserRouter>
    )
}

export default App
