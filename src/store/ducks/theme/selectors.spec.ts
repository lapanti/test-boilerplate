import { isDarkModeSelector } from './selectors'

describe('theme selectors', () => {
    describe('isDarkModeSelector', () => {
        it('should return correct value', () => {
            expect(isDarkModeSelector({ theme: { darkMode: false } })).toBeFalsy()
            expect(isDarkModeSelector({ theme: { darkMode: true } })).toBeTruthy()
        })
    })
})
