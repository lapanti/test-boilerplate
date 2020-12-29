import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import App from './App'
import store from './store/store'

const navigation = 'navigation'
const whoami = 'whoami'
const setup = 'setup'

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as Record<string, unknown>),
    BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))
jest.mock('./lib/preference', () => ({ prefersDarkMode: jest.fn().mockReturnValue(true) }))
jest.mock('./app/Navigation', () => () => <span>{navigation}</span>)
jest.mock('./app/Whoami', () => () => <span>{whoami}</span>)
jest.mock('./app/Setup', () => () => <span>{setup}</span>)

describe('<App />', () => {
    it('should render whoami on base path', () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[{ pathname: '/' }]}>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(navigation)).toBeInTheDocument()
        expect(screen.getByText(whoami)).toBeInTheDocument()
        expect(screen.queryByText(setup)).not.toBeInTheDocument()
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
              grid-template-rows: auto 1fr;
              grid-template-areas: 'header' 'main';
              overflow: auto;
            }

            <div>
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
                    whoami
                  </span>
                </article>
              </div>
            </div>
        `)
    })

    it('should render setup on /setup', () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[{ pathname: '/setup' }]}>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(navigation)).toBeInTheDocument()
        expect(screen.queryByText(whoami)).not.toBeInTheDocument()
        expect(screen.getByText(setup)).toBeInTheDocument()
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
              grid-template-rows: auto 1fr;
              grid-template-areas: 'header' 'main';
              overflow: auto;
            }

            <div>
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
                    setup
                  </span>
                </article>
              </div>
            </div>
        `)
    })
})
