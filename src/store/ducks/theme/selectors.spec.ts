import { mockState } from '../../store'
import { isDarkModeSelector } from './selectors'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('theme selectors', () => {
    describe('isDarkModeSelector', () => {
        it('should return correct value', () => {
            expect(isDarkModeSelector(mockState({ theme: { darkMode: false } }))).toBeFalsy()
            expect(isDarkModeSelector(mockState({ theme: { darkMode: true } }))).toBeTruthy()
        })
    })
})
