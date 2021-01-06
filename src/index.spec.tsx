import './App'

import ReactDOM from 'react-dom'

jest.mock('react-dom', () => ({
    __esModule: true,
    default: {
        ...jest.requireActual('react-dom'),
        render: jest.fn(),
    },
}))
jest.mock('./lib/preference', () => ({ prefersDarkMode: jest.fn().mockReturnValue(true) }))

describe('index', () => {
    const mockGetElementById = jest.fn()
    document.getElementById = mockGetElementById
    it('should call ReactDOM.render with correct args', async () => {
        await import('./index')
        expect(mockGetElementById).toHaveBeenCalledWith('root')
        expect((ReactDOM.render as ReturnType<typeof jest.fn>).mock.calls).toMatchInlineSnapshot(`
            Array [
              Array [
                <UNDEFINED>
                  <Provider
                    store={
                      Object {
                        "dispatch": [Function],
                        "getState": [Function],
                        "replaceReducer": [Function],
                        "subscribe": [Function],
                        Symbol(observable): [Function],
                      }
                    }
                  >
                    <App />
                  </Provider>
                </UNDEFINED>,
                undefined,
              ],
            ]
        `)
    })
})
