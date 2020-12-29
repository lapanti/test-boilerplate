import styled from 'styled-components'

const Main = styled.main`
    grid-area: main;
    display: grid;
    grid-template-columns:
        1fr
        min(65ch, calc(100% - var(--xxl)))
        1fr;
    grid-column-gap: var(--xl);
    grid-auto-rows: minmax(min-content, max-content);

    @media (min-width: 660px) {
        grid-template-columns:
            1fr
            min(65ch, 100%)
            1fr;
        grid-column-gap: normal;
    }

    & > * {
        grid-column: 2;
    }
`

export default Main
