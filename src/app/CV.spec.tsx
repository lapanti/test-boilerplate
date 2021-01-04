import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

import { jobsArray, Tech, techs } from '../constants/jobs'
import type { JobWithDuration } from '../store/ducks/experience/slice'
import experienceSlice from '../store/ducks/experience/slice'
import { mockState, mockStore } from '../store/store'
import CV from './CV'

jest.mock('../lib/preference', () => ({ prefersDarkMode: jest.fn().mockReturnValue(true) }))
jest.mock('./cv/Job', () => ({ job }: { job: JobWithDuration }) => <span>{job.id}</span>)
jest.mock(
    './cv/Technology',
    () => ({ tech, duration, totalExperience }: { tech: Tech; duration?: Duration; totalExperience?: Duration }) => (
        <span>
            {tech}
            {duration ? ` ${duration.years} ${duration.months}` : ''}
            {totalExperience ? ` ${totalExperience.years} ${totalExperience.months}` : ''}
        </span>
    )
)

describe('<CV />', () => {
    it('should match snapshot when status === ""', () => {
        const startSpy = jest.spyOn(experienceSlice.actions, 'initializeStart')
        const { container } = render(
            <Provider store={mockStore(mockState({ experience: { status: '' } }))}>
                <CV />
            </Provider>
        )

        expect(screen.getByRole('heading', { name: /CV/i })).toBeInTheDocument()
        expect(screen.getByText('what I have done')).toBeInTheDocument()

        expect(startSpy).toHaveBeenCalledTimes(1)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot when status === "loading"', () => {
        const startSpy = jest.spyOn(experienceSlice.actions, 'initializeStart')
        const { container } = render(
            <Provider store={mockStore(mockState({ experience: { status: 'loading' } }))}>
                <CV />
            </Provider>
        )

        expect(screen.getByRole('heading', { name: /CV/i })).toBeInTheDocument()
        expect(screen.getByText('what I have done')).toBeInTheDocument()
        expect(screen.getByText('Loading...')).toBeInTheDocument()

        expect(startSpy).toHaveBeenCalledTimes(0)

        expect(container).toMatchSnapshot()
    })

    it('should match snapshot when status === "done"', () => {
        const startSpy = jest.spyOn(experienceSlice.actions, 'initializeStart')
        const { container } = render(
            <Provider
                store={mockStore(
                    mockState({
                        experience: {
                            status: 'done',
                            jobs: {
                                [jobsArray[0].id]: { ...jobsArray[0], duration: { months: 4 } },
                                [jobsArray[1].id]: { ...jobsArray[1], duration: { months: 3 } },
                            },
                            techs: {
                                [techs.CSS]: { years: 1, months: 4 },
                                [techs.HTML]: { years: 1, months: 3 },
                            },
                            totalExperience: { years: 1, months: 7 },
                        },
                    })
                )}
            >
                <CV />
            </Provider>
        )

        expect(screen.getByRole('heading', { name: /CV/i })).toBeInTheDocument()
        expect(screen.getByText('what I have done')).toBeInTheDocument()

        expect(screen.getByRole('heading', { name: /^Technologies/i })).toBeInTheDocument()
        expect(screen.getByText(`${techs.CSS} 1 4 1 7`)).toBeInTheDocument()
        expect(screen.getByText(`${techs.HTML} 1 3 1 7`)).toBeInTheDocument()

        expect(screen.getByRole('heading', { name: /Jobs/i })).toBeInTheDocument()
        expect(screen.getByText(jobsArray[0].id)).toBeInTheDocument()
        expect(screen.getByText(jobsArray[1].id)).toBeInTheDocument()

        expect(screen.getByRole('heading', { name: /Other technologies/i })).toBeInTheDocument()

        expect(startSpy).toHaveBeenCalledTimes(0)

        expect(container).toMatchSnapshot()
    })
})
