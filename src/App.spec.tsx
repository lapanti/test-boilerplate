import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import App from './App'
import store from './store/store'

const frontPage = 'frontPage'
const navigation = 'navigation'

jest.mock('./lib/preference', () => ({ prefersDarkMode: jest.fn().mockReturnValue(true) }))
jest.mock('./app/Navigation', () => () => <span>{navigation}</span>)
jest.mock('./app/FrontPage', () => () => <span>{frontPage}</span>)

describe('<App />', () => {
    it('should render FrontPage on base path', () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[{ pathname: '/' }]}>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(navigation)).toBeInTheDocument()
        expect(screen.getByText(frontPage)).toBeInTheDocument()
        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              background-color: var(--background-primary);
              display: grid;
              grid-template-rows: auto 1fr;
              grid-template-areas: 'navigation' 'content';
              height: 100vh;
            }

            .c1 {
              grid-area: content;
              display: grid;
              grid-template-columns: 1fr min(65ch,calc(100% - var(--xxl))) 1fr;
              grid-column-gap: var(--xl);
              grid-template-rows: auto 1fr;
              grid-template-areas: 'header' 'main';
              overflow: auto;
            }

            .c1 > * {
              grid-column: 2;
            }

            @media (min-width:660px) {
              .c1 {
                grid-template-columns: 1fr min(65ch,100%) 1fr;
                grid-column-gap: normal;
              }
            }

            <div
              class="c0"
            >
              <span>
                navigation
              </span>
              <article
                class="c1"
              >
                <span>
                  frontPage
                </span>
              </article>
            </div>
        `)
    })
})
