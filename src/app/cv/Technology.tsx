import React from 'react'
import styled, { keyframes } from 'styled-components'

import Highlight from '../../components/Highlight'
import type { Tech } from '../../constants/jobs'
import { diffDuration, durationToString } from '../../lib/duration'

export const fill = (percentage: number): ReturnType<typeof keyframes> => keyframes`
    from {
        width: 0;
    } to {
        width: ${percentage}%;
    }
`

const Item = styled.li<{ percentage: number }>`
    position: relative;
    padding: var(--xxs) var(--xs);
    z-index: 1;

    :not(:last-of-type) {
        margin-bottom: var(--xs);
    }

    :before {
        content: ' ';
        position: absolute;
        background: var(--background-secondary);
        border-radius: 4px;
        left: 0;
        top: 0;
        height: 100%;
        animation: ${({ percentage }) => fill(percentage)} 1s cubic-bezier(0.75, 0, 0.25, 1) forwards;
        z-index: -1;
        transition: width 1s ease;
    }
`

interface TechnologyProps {
    duration?: Duration
    tech: Tech
    totalExperience?: Duration
}

const Technology: React.FunctionComponent<TechnologyProps> = ({ duration, tech, totalExperience }) =>
    !duration ? null : (
        <Item percentage={diffDuration(duration, totalExperience)}>
            <Highlight>{tech}</Highlight>: {durationToString(duration)}
        </Item>
    )

export default Technology
