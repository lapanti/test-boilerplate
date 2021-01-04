import React from 'react'

import Header from '../components/Header'
import Link from '../components/Link'
import Main from '../components/Main'

const Whoami: React.FunctionComponent = () => (
    <>
        <Header subtitle="whoami" title="Lauri Lavanti" />
        <Main>
            <p>Hello World!</p>
            <p>
                I am a developer with <Link to="/cv">some experience</Link> in the field (including consulting and
                product business). My main concern is with the front end of things (and UX).
            </p>
            <p>
                My main stack (for now) is with TypeScript, React, redux and all things that go with them. For styling I
                mainly use styled-components or other libraries with similar syntax. For now, I&apos;ve found that{' '}
                <Link href="https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af">
                    the Fractal pattern
                </Link>{' '}
                is the only way to keep a large project logical. As an example, you can look at the{' '}
                <Link href="https://github.com/lapanti/lapanti.github.io">code of this page</Link>, to see what I&apos;m
                talking about. (Usually I am against over-engineering, but this site has been a kind of pet project so I
                over-engineered the **** out of it)
            </p>
            <p>
                I am currently happily employed, but if you still want to check them out, here&apos;s my{' '}
                <Link href="https://github.com/lapanti">Github</Link> and{' '}
                <Link href="https://www.linkedin.com/in/lapanti/">LinkedIn</Link>. I also have a{' '}
                <Link href="https://twitter.com/laurilavanti">Twitter</Link>
                -account (my handle is taken there 😢), but I mainly use it to stay up-to-date on things.
            </p>
            <p>
                I think later I will maybe do some writing here, but we shall see how much time I have on my hands (with
                two kids and a dog).
            </p>
        </Main>
    </>
)

export default Whoami
