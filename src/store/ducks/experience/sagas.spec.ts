/* eslint-disable @typescript-eslint/no-non-null-assertion */
import intervalToDuration from 'date-fns/intervalToDuration'
import { Action } from 'redux'
import { runSaga } from 'redux-saga'

import { jobsArray, techs } from '../../../constants/jobs'
import { sumDurations } from '../../../lib/duration'
import { mockState } from '../../store'
import { initializeSaga } from './sagas'
import type { JobWithDuration } from './slice'
import experienceSlice from './slice'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('experience sagas', () => {
    jest.useFakeTimers('modern').setSystemTime(1601499600000)

    describe('initializeSaga', () => {
        it('should dispatch correct actions', async () => {
            const dispatched: Action[] = []
            runSaga(
                { dispatch: (action: Action) => dispatched.push(action), getState: () => ({ state: mockState({}) }) },
                initializeSaga
            ).toPromise()
            const job0: JobWithDuration = {
                ...jobsArray[0],
                duration: intervalToDuration({ start: jobsArray[0].startDate, end: jobsArray[0].endDate! }),
            }
            const job1 = {
                ...jobsArray[1],
                duration: intervalToDuration({ start: jobsArray[1].startDate, end: jobsArray[1].endDate! }),
            }
            const job2 = {
                ...jobsArray[2],
                duration: intervalToDuration({ start: jobsArray[2].startDate, end: jobsArray[2].endDate! }),
            }
            const job3 = {
                ...jobsArray[3],
                duration: intervalToDuration({ start: jobsArray[3].startDate, end: jobsArray[3].endDate! }),
            }
            const job4 = {
                ...jobsArray[4],
                duration: intervalToDuration({ start: jobsArray[4].startDate, end: jobsArray[4].endDate! }),
            }
            const job5 = {
                ...jobsArray[5],
                duration: intervalToDuration({ start: jobsArray[5].startDate, end: Date.now() }),
            }
            const totalDuration = sumDurations(
                job0.duration,
                job1.duration,
                job2.duration,
                job3.duration,
                job4.duration,
                job5.duration
            )
            expect(dispatched).toEqual([
                experienceSlice.actions.setJob({
                    key: jobsArray[0].id,
                    job: job0,
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[1].id,
                    job: job1,
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[2].id,
                    job: job2,
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[3].id,
                    job: job3,
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[4].id,
                    job: job4,
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[5].id,
                    job: job5,
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.JavaScript,
                    value: totalDuration,
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.HTML,
                    value: totalDuration,
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.CSS,
                    value: totalDuration,
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['Node.js'],
                    value: sumDurations(job2.duration, job3.duration, job4.duration, job5.duration),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.React,
                    value: sumDurations(job2.duration, job3.duration, job4.duration, job5.duration),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.redux,
                    value: sumDurations(job2.duration, job3.duration, job4.duration, job5.duration),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['redux-observable'],
                    value: sumDurations(job2.duration, job3.duration),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.Scala,
                    value: job2.duration,
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.TypeScript,
                    value: sumDurations(job3.duration, job4.duration, job5.duration),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['redux-saga'],
                    value: sumDurations(job4.duration, job5.duration),
                }),
                experienceSlice.actions.setTotalExperience({
                    totalExperience: totalDuration,
                }),
                experienceSlice.actions.initializeDone(),
            ])
        })
    })
})
