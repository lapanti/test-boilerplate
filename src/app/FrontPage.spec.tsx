import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import FrontPage from './FrontPage'

describe('<FrontPage />', () => {
    it('should contain correct header', () => {
        render(
            <MemoryRouter>
                <FrontPage />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /Lauri Lavanti/i })).toBeInTheDocument()
        expect(screen.getByText('whoami')).toBeInTheDocument()
    })

    it('should contain the important links', () => {
        render(
            <MemoryRouter>
                <FrontPage />
            </MemoryRouter>
        )
        expect(screen.getByRole('link', { name: /some experience/i })).toHaveAttribute('href', '/cv')
        expect(screen.getByRole('link', { name: /code of this page/i })).toHaveAttribute(
            'href',
            'https://github.com/lapanti/lapanti.github.io'
        )
    })

    it('should match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <FrontPage />
            </MemoryRouter>
        )
        expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="swue83p"
        >
          <h1
            class="hfrfs33"
          >
            Lauri Lavanti
          </h1>
          <p>
            whoami
          </p>
        </header>
        <main
          class="m9ku3w5"
        >
          <p>
            Hello World!
          </p>
          <p>
            I am a developer with 
            <a
              class="s1dl0hk9"
              href="/cv"
            >
              some experience
            </a>
             in the field (including consulting and product business). My main concern is with the front end of things (and UX).
          </p>
          <p>
            My main stack (for now) is with TypeScript, React, redux and all things that go with them. For styling I mainly use styled-components or other libraries with similar syntax. For now, I've found that
             
            <a
              class="s1dl0hk9"
              href="https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af"
              target="_blank"
            >
              the Fractal pattern
            </a>
             
            is the only way to keep a large project logical. As an example, you can look at the
             
            <a
              class="s1dl0hk9"
              href="https://github.com/lapanti/lapanti.github.io"
              target="_blank"
            >
              code of this page
            </a>
            , to see what I'm talking about.
          </p>
          <p>
            I am currently happily employed, but because you still maybe want to see them, here's my
             
            <a
              class="s1dl0hk9"
              href="https://github.com/lapanti"
              target="_blank"
            >
              Github
            </a>
             and
             
            <a
              class="s1dl0hk9"
              href="https://www.linkedin.com/in/lapanti/"
              target="_blank"
            >
              LinkedIn
            </a>
            . I also have a
             
            <a
              class="s1dl0hk9"
              href="https://twitter.com/laurilavanti"
              target="_blank"
            >
              Twitter
            </a>
            -account (my handle is taken there 😢), but I mainly use it to stay up-to-date on things.
          </p>
          <p>
            I think later I will maybe do some writing here, but we shall see how much time I have on my hands (with two kids and a dog).
          </p>
        </main>
      </div>
    `)
    })
})
