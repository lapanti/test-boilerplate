import { Action } from 'redux'
import { runSaga } from 'redux-saga'

import { jobsArray, techs } from '../../../constants/jobs'
import { mockState } from '../../store'
import { initializeSaga } from './sagas'
import experienceSlice from './slice'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

const createDuration = ({ years, months }: { years?: number | undefined; months?: number | undefined }): Duration => ({
    years: years || 0,
    months: months || 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
})

describe('experience sagas', () => {
    jest.useFakeTimers('modern').setSystemTime(1601499600000)

    describe('initializeSaga', () => {
        it('should dispatch correct actions', async () => {
            const dispatched: Action[] = []
            runSaga(
                { dispatch: (action: Action) => dispatched.push(action), getState: () => ({ state: mockState({}) }) },
                initializeSaga
            ).toPromise()
            expect(dispatched).toEqual([
                experienceSlice.actions.setJob({
                    key: jobsArray[0].id,
                    job: { ...jobsArray[0], duration: createDuration({ months: 4 }) },
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[1].id,
                    job: { ...jobsArray[1], duration: createDuration({ months: 3 }) },
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[2].id,
                    job: { ...jobsArray[2], duration: createDuration({ years: 1, months: 9 }) },
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[3].id,
                    job: { ...jobsArray[3], duration: createDuration({ months: 10 }) },
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[4].id,
                    job: { ...jobsArray[4], duration: createDuration({ years: 1, months: 9 }) },
                }),
                experienceSlice.actions.setJob({
                    key: jobsArray[5].id,
                    job: { ...jobsArray[5], duration: createDuration({ years: 1 }) },
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.JavaScript,
                    value: createDuration({ years: 5, months: 11 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.HTML,
                    value: createDuration({ years: 5, months: 11 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.CSS,
                    value: createDuration({ years: 5, months: 11 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['Node.js'],
                    value: createDuration({ years: 5, months: 4 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.React,
                    value: createDuration({ years: 5, months: 4 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.redux,
                    value: createDuration({ years: 5, months: 4 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['redux-observable'],
                    value: createDuration({ years: 2, months: 7 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.Scala,
                    value: createDuration({ years: 1, months: 9 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs.TypeScript,
                    value: createDuration({ years: 3, months: 7 }),
                }),
                experienceSlice.actions.setTechExperience({
                    key: techs['redux-saga'],
                    value: createDuration({ years: 2, months: 9 }),
                }),
                experienceSlice.actions.setTotalExperience({
                    totalExperience: createDuration({ years: 5, months: 11 }),
                }),
                experienceSlice.actions.initializeDone(),
            ])
        })
    })
})
