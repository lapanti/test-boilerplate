import intervalToDuration from 'date-fns/intervalToDuration'

import { techs } from '../../../constants/jobs'
import { mockState } from '../../store'
import { jobsArraySelector, statusSelector, techsSelector, totalExperienceSelector } from './selectors'
import type { JobWithDuration } from './slice'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('experience selectors', () => {
    describe('statusSelector', () => {
        it('should return correct value', () => {
            expect(statusSelector(mockState({ experience: { status: 'loading' } }))).toEqual('loading')
        })
    })

    describe('jobsArraySelector', () => {
        it('should return jobs in correct order', () => {
            const firstJob: JobWithDuration = {
                id: 'nokiaSolutionsAndNetworks',
                companyName: 'test1',
                title: 'title1',
                description: 'description1',
                techs: [],
                startDate: new Date(2000, 1).getTime(),
                duration: intervalToDuration({ start: new Date(2000, 1), end: new Date(2000, 2) }),
            }
            const secondJob: JobWithDuration = {
                id: 'futurice',
                companyName: 'test2',
                title: 'title2',
                description: 'description2',
                techs: [],
                startDate: new Date(2010, 1).getTime(),
                duration: intervalToDuration({ start: new Date(2010, 1), end: new Date(2010, 2) }),
            }
            const thirdJob: JobWithDuration = {
                id: 'pulmatonSolutionsOy',
                companyName: 'test3',
                title: 'title3',
                description: 'description3',
                techs: [],
                startDate: new Date(2020, 1).getTime(),
                duration: intervalToDuration({ start: new Date(2020, 1), end: new Date(2020, 2) }),
            }
            expect(
                jobsArraySelector(
                    mockState({
                        experience: {
                            jobs: {
                                [firstJob.id]: firstJob,
                                [thirdJob.id]: thirdJob,
                                [secondJob.id]: secondJob,
                            },
                        },
                    })
                )
            ).toEqual([thirdJob, secondJob, firstJob])
        })
    })

    describe('techsSelector', () => {
        it('should return correct values', () => {
            const techsObj = {
                [techs.TypeScript]: intervalToDuration({ start: new Date(2000, 1), end: new Date(2000, 2) }),
                [techs.HTML]: intervalToDuration({ start: new Date(2010, 1), end: new Date(2010, 2) }),
            }
            expect(
                techsSelector(
                    mockState({
                        experience: {
                            techs: techsObj,
                        },
                    })
                )
            ).toEqual(techsObj)
        })
    })

    describe('totalExperienceSelector', () => {
        it('should return correct value', () => {
            const totalExperience = intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) })
            expect(
                totalExperienceSelector(mockState({ experience: { jobs: {}, techs: {}, totalExperience } }))
            ).toEqual(totalExperience)
        })
    })
})
