import intervalToDuration from 'date-fns/intervalToDuration'
import type { SagaIterator } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'

import { jobsArray, Tech } from '../../../constants/jobs'
import { sumDurations } from '../../../lib/duration'
import type { JobWithDuration } from './slice'
import experienceSlice from './slice'

export const initializeSaga = function* (): SagaIterator {
    const jobsWithDuration: JobWithDuration[] = jobsArray.map((job) => ({
        ...job,
        duration: intervalToDuration({ start: job.startDate, end: job.endDate || Date.now() }),
    }))
    yield all(jobsWithDuration.map((job) => put(experienceSlice.actions.setJob({ key: job.id, job }))))
    const techExperiences: Partial<Record<Tech, Duration>> = jobsWithDuration.reduce(
        (acc, { techs, duration }) => ({
            ...acc,
            ...techs.reduce(
                (accu, tech) => ({ ...accu, [tech]: sumDurations(duration, acc[tech]) }),
                {} as Partial<Record<Tech, Duration>>
            ),
        }),
        {} as Partial<Record<Tech, Duration>>
    )
    yield all(
        Object.entries(techExperiences).map(([key, value]) =>
            put(experienceSlice.actions.setTechExperience({ key: key as Tech, value: value as Duration }))
        )
    )
    yield put(
        experienceSlice.actions.setTotalExperience({
            totalExperience: jobsWithDuration.reduce(
                (acc, { duration }) => sumDurations(acc, duration),
                {} as Duration
            ),
        })
    )
    return yield put(experienceSlice.actions.initializeDone())
}

const experienceSagas = function* (): SagaIterator {
    yield takeEvery(experienceSlice.actions.initializeStart, initializeSaga)
}

export default experienceSagas
