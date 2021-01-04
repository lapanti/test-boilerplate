import { render, screen } from '@testing-library/react'
import React from 'react'

import { techs } from '../../constants/jobs'
import { durationToString } from '../../lib/duration'
import Technology, { fill } from './Technology'

describe('<Technology />', () => {
    it('should render nothing if no duration', () => {
        const { container } = render(<Technology tech={techs.CSS} />)
        expect(container.firstChild).toBeNull()
    })

    it('should render', () => {
        const totalExperience: Duration = { years: 6, months: 2 }
        const duration: Duration = { years: 5, months: 7 }
        const { container } = render(
            <Technology duration={duration} tech={techs.CSS} totalExperience={totalExperience} />
        )

        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(1)
        expect(listItems[0].textContent).toEqual(`${techs.CSS}: ${durationToString(duration)}`)

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c1 {
              color: var(--text-color-highlight);
            }

            .c0 {
              position: relative;
              padding: var(--xxs) var(--xs);
              z-index: 1;
            }

            .c0:not(:last-of-type) {
              margin-bottom: var(--xs);
            }

            .c0:before {
              content: ' ';
              position: absolute;
              background: var(--background-secondary);
              border-radius: 4px;
              left: 0;
              top: 0;
              height: 100%;
              -webkit-animation: jCqQKm 1s cubic-bezier(0.75,0,0.25,1) forwards;
              animation: jCqQKm 1s cubic-bezier(0.75,0,0.25,1) forwards;
              z-index: -1;
              -webkit-transition: width 1s ease;
              transition: width 1s ease;
            }

            <li
              class="c0"
            >
              <span
                class="c1"
              >
                CSS
              </span>
              : 
              5 years 7 months
            </li>
        `)
    })

    describe('fill', () => {
        it('should match snapshot', () => {
            expect(fill(50)).toMatchInlineSnapshot(`
                e {
                  "id": "sc-keyframes-fHYaMa",
                  "inject": [Function],
                  "name": "fHYaMa",
                  "rules": "
                    from {
                        width: 0;
                    } to {
                        width: 50%;
                    }
                ",
                  "toString": [Function],
                }
            `)
        })
    })
})
