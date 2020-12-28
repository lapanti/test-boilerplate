import { prefersDarkMode } from '../../../lib/preference'
import { isDarkModeSelector } from './selectors'
import themeSlice, { initialState } from './slice'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('theme', () => {
    describe('initialState', () => {
        it('should match snapshot when user prefers light-mode', () => {
            ;(prefersDarkMode as jest.Mock).mockReturnValueOnce(false)
            expect(initialState).toMatchInlineSnapshot(`
                        Object {
                          "darkMode": true,
                        }
                  `)
        })

        it('should match snapshot', () => {
            expect(initialState).toMatchInlineSnapshot(`
                Object {
                  "darkMode": true,
                }
            `)
        })
    })

    describe('actions', () => {
        describe('toggleDarkMode', () => {
            it('should match snapshot', () => {
                expect(themeSlice.actions.toggleDarkMode()).toMatchInlineSnapshot(`
                              Object {
                                "payload": undefined,
                                "type": "theme/toggleDarkMode",
                              }
                        `)
            })
        })
    })

    describe('reducers', () => {
        describe('toggleDarkMode', () => {
            it('should toggle it on (when off)', () => {
                const theme = themeSlice.reducer({ darkMode: false }, themeSlice.actions.toggleDarkMode())
                expect(isDarkModeSelector({ theme })).toBeTruthy()
                expect(theme).toMatchInlineSnapshot(`
                              Object {
                                "darkMode": true,
                              }
                        `)
            })

            it('should toggle it off (when on)', () => {
                const theme = themeSlice.reducer({ darkMode: true }, themeSlice.actions.toggleDarkMode())
                expect(isDarkModeSelector({ theme })).toBeFalsy()
                expect(theme).toMatchInlineSnapshot(`
                              Object {
                                "darkMode": false,
                              }
                        `)
            })
        })
    })
})
