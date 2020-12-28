import { prefersDarkMode } from './preference'

describe('preference', () => {
    describe('prefersDarkMode', () => {
        it('should return true when appropriate', () => {
            Object.defineProperty(window, 'matchMedia', {
                value: jest.fn().mockImplementation((query) => ({
                    addEventListener: jest.fn(),
                    addListener: jest.fn(), // deprecated
                    dispatchEvent: jest.fn(),
                    matches: false,
                    media: query,
                    onchange: null,
                    removeEventListener: jest.fn(),
                    removeListener: jest.fn(), // deprecated
                })),
                writable: true,
            })
            expect(prefersDarkMode()).toBeTruthy()
        })

        it('should return false when appropriate', () => {
            Object.defineProperty(window, 'matchMedia', {
                value: jest.fn().mockImplementation((query) => ({
                    addEventListener: jest.fn(),
                    addListener: jest.fn(), // deprecated
                    dispatchEvent: jest.fn(),
                    matches: true,
                    media: query,
                    onchange: null,
                    removeEventListener: jest.fn(),
                    removeListener: jest.fn(), // deprecated
                })),
                writable: true,
            })
            expect(prefersDarkMode()).toBeFalsy()
        })
    })
})
