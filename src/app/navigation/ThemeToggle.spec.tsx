import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux'

import themeSlice from '../../store/ducks/theme/slice'
import { mockStore } from '../../store/store'
import ThemeToggle from './ThemeToggle'

jest.mock('../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('<ThemeToggle />', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render correctly (dark mode)', () => {
        const store = mockStore({ theme: { darkMode: true } })
        const { container } = render(
            <Provider store={store}>
                <ThemeToggle />
            </Provider>
        )
        expect(screen.getByRole('switch', { name: /Toggle dark\/light mode/i })).toHaveAttribute('aria-checked', 'true')
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render correctly (light mode)', () => {
        const store = mockStore({ theme: { darkMode: false } })
        const { container } = render(
            <Provider store={store}>
                <ThemeToggle />
            </Provider>
        )
        expect(screen.getByRole('switch', { name: /Toggle dark\/light mode/i })).toHaveAttribute(
            'aria-checked',
            'false'
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should dispatch correct action on toggle', () => {
        const store = mockStore()
        jest.spyOn(store, 'dispatch')
        render(
            <Provider store={store}>
                <ThemeToggle />
            </Provider>
        )
        const toggle = screen.getByRole('switch', { name: /Toggle dark\/light mode/i })
        expect(toggle).toHaveAttribute('aria-checked', 'true')
        userEvent.click(toggle)
        expect(store.dispatch).toHaveBeenCalledWith(themeSlice.actions.toggleDarkMode())
        expect(toggle).toHaveAttribute('aria-checked', 'false')
    })
})
