import React from 'react'

import Header from '../components/Header'
import Link from '../components/Link'
import Main from '../components/Main'

const Setup: React.FunctionComponent = () => (
    <>
        <Header subtitle="how I code" title="Setup" />
        <Main>
            <p>
                Nowadays I code all my stuff in Windows, using{' '}
                <Link href="https://docs.microsoft.com/en-us/windows/wsl/">WSL</Link>. I used to work with a MacBook,
                but I got tired of having to switch from Apple (work) to Windows (home) and now I only have one
                environment (and one computer) for all my needs. I&apos;ve been using WSL from (almost) day one it came
                out to the public, and although it has it&apos;s problems, I have been very happy with it.
            </p>
            <p>
                My main editor is (surprise surprise) <Link href="https://code.visualstudio.com/">VS Code</Link>. It has
                good integration with WSL (since WSL 2), so I can actually keep my code inside the linux kernel and
                still write the code in a Windows application. As the look and feel is important to me, the first thing
                I always install on a new computer (after VS Code etc) is{' '}
                <Link href="https://github.com/tonsky/FiraCode">Fira Code</Link> for my typography and{' '}
                <Link href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme">
                    the Material Theme
                </Link>{' '}
                for VS Code (using Darker, which is actually what I based my color scheme on this page on).
            </p>
            <p>
                For all my console needs I use <Link href="https://github.com/microsoft/terminal">Terminal</Link> by
                Microsoft. Mainly all <code>npm</code> (and sometimes Docker) related things as well as <code>git</code>{' '}
                things (I use <code>nano</code> for everything else, but for git I use <code>vim</code>, crazy I know).
                I spice it up with zsh, oh-my-zsh nad some very nice aliases.
            </p>
        </Main>
    </>
)

export default Setup
