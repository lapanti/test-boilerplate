import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

describe('<ScrollToTop />', () => {
    it('should render null but run useEffect', () => {
        jest.spyOn(window, 'scrollTo')
        const { container } = render(
            <MemoryRouter>
                <ScrollToTop />
            </MemoryRouter>
        )
        expect(window.scrollTo).toHaveBeenCalledTimes(1)
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
        expect(container.firstChild).toBeNull()
    })
})
