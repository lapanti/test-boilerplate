import { render, screen } from '@testing-library/react'
import format from 'date-fns/format'
import locale from 'date-fns/locale/fi'
import React from 'react'

import { techs } from '../../constants/jobs'
import { durationToString } from '../../lib/duration'
import type { JobWithDuration } from '../../store/ducks/experience/slice'
import Job from './Job'

const job: JobWithDuration = {
    id: 'futurice',
    companyName: 'Company',
    title: 'Title',
    description: 'Description',
    techs: [techs.CSS, techs.HTML],
    startDate: new Date(2020, 0).valueOf(),
    duration: { years: 1, months: 1 },
}

describe('<Job />', () => {
    it('should render null when no job', () => {
        const { container } = render(<Job />)
        expect(container.firstChild).toBeNull()
    })

    it('should render a job (without an end date)', () => {
        const { container } = render(<Job job={job} />)

        const definitions = screen.getAllByRole('definition')
        const hasDefinition = (content: string): boolean =>
            definitions.some((definition) => definition.textContent === content)

        expect(hasDefinition(job.companyName)).toBeTruthy()
        expect(hasDefinition(job.title)).toBeTruthy()
        expect(hasDefinition(job.description)).toBeTruthy()
        expect(hasDefinition(job.techs.join(''))).toBeTruthy()
        expect(
            hasDefinition(
                `from ${format(job.startDate, 'M/yyyy', { locale })} onwards (${durationToString(job.duration)})`
            )
        ).toBeTruthy()

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c1 {
              color: var(--text-color-highlight);
            }

            .c0 {
              position: absolute;
              left: -10000px;
              top: auto;
              width: 1px;
              height: 1px;
              overflow: hidden;
            }

            .c3 {
              margin: 0;
            }

            .c2 {
              margin: 0;
            }

            .c4 {
              display: inline;
              list-style: none;
              padding-left: 0;
            }

            .c6 {
              display: inline;
            }

            .c5 + .c5:before {
              content: ', ';
            }

            <dl>
              <dt
                class="c0"
              >
                Company
              </dt>
              <dd
                class="c1 c2"
              >
                <strong>
                  Company
                </strong>
              </dd>
              <dt
                class="c0"
              >
                Title
              </dt>
              <dd
                class="c1 c2"
              >
                Title
              </dd>
              <dt
                class="c0"
              >
                Duration
              </dt>
              <dd
                class="c1 c2"
              >
                <small>
                  from 
                  <time
                    datetime="2020-1"
                  >
                    1/2020
                  </time>
                   
                  onwards
                   
                  (
                  1 year 1 month
                  )
                </small>
              </dd>
              <dt
                class="c0"
              >
                Description
              </dt>
              <dd
                class="c3"
              >
                Description
              </dd>
              <br />
              <dt
                class="c0"
              >
                Technologies used
              </dt>
              <dd
                class="c3"
              >
                <ul
                  class="c4"
                >
                  <li
                    class="c5 c6"
                  >
                    CSS
                  </li>
                  <li
                    class="c5 c6"
                  >
                    HTML
                  </li>
                </ul>
              </dd>
            </dl>
        `)
    })

    it('should render a job (without an end date)', () => {
        const job2: JobWithDuration = { ...job, endDate: new Date(2021, 1).valueOf() }
        const { container } = render(<Job job={job2} />)

        const definitions = screen.getAllByRole('definition')
        const hasDefinition = (content: string): boolean =>
            definitions.some((definition) => definition.textContent === content)

        expect(hasDefinition(job2.companyName)).toBeTruthy()
        expect(hasDefinition(job2.title)).toBeTruthy()
        expect(hasDefinition(job2.description)).toBeTruthy()
        expect(hasDefinition(job2.techs.join(''))).toBeTruthy()
        expect(
            hasDefinition(
                // eslint-disable-next-line
                `from ${format(job2.startDate, 'M/yyyy', { locale })} until ${format(job2.endDate!, 'M/yyyy', {
                    locale,
                })} (${durationToString(job2.duration)})`
            )
        ).toBeTruthy()

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c1 {
              color: var(--text-color-highlight);
            }

            .c0 {
              position: absolute;
              left: -10000px;
              top: auto;
              width: 1px;
              height: 1px;
              overflow: hidden;
            }

            .c3 {
              margin: 0;
            }

            .c2 {
              margin: 0;
            }

            .c4 {
              display: inline;
              list-style: none;
              padding-left: 0;
            }

            .c6 {
              display: inline;
            }

            .c5 + .c5:before {
              content: ', ';
            }

            <dl>
              <dt
                class="c0"
              >
                Company
              </dt>
              <dd
                class="c1 c2"
              >
                <strong>
                  Company
                </strong>
              </dd>
              <dt
                class="c0"
              >
                Title
              </dt>
              <dd
                class="c1 c2"
              >
                Title
              </dd>
              <dt
                class="c0"
              >
                Duration
              </dt>
              <dd
                class="c1 c2"
              >
                <small>
                  from 
                  <time
                    datetime="2020-1"
                  >
                    1/2020
                  </time>
                   
                  until 
                  <time
                    datetime="2021-2"
                  >
                    2/2021
                  </time>
                   
                  (
                  1 year 1 month
                  )
                </small>
              </dd>
              <dt
                class="c0"
              >
                Description
              </dt>
              <dd
                class="c3"
              >
                Description
              </dd>
              <br />
              <dt
                class="c0"
              >
                Technologies used
              </dt>
              <dd
                class="c3"
              >
                <ul
                  class="c4"
                >
                  <li
                    class="c5 c6"
                  >
                    CSS
                  </li>
                  <li
                    class="c5 c6"
                  >
                    HTML
                  </li>
                </ul>
              </dd>
            </dl>
        `)
    })
})
