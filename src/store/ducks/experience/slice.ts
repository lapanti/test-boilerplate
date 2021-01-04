import type { Action, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { Duration } from 'date-fns'

import type { Job, JobKey, Tech } from '../../../constants/jobs'

export interface JobWithDuration extends Job {
    duration: Duration
}

interface ExperienceState {
    status: '' | 'loading' | 'done'
    jobs: Partial<Record<JobKey, JobWithDuration>>
    techs: Partial<Record<Tech, Duration>>
    totalExperience?: Duration
}

export const initialState: ExperienceState = {
    status: '',
    jobs: {},
    techs: {},
}

const initializeStart: CaseReducer<ExperienceState, Action> = (state) => {
    state.status = 'loading'
}

const setJob: CaseReducer<ExperienceState, PayloadAction<{ key: JobKey; job: JobWithDuration }>> = (
    state,
    { payload: { key, job } }
) => {
    state.jobs[key] = job
}

const setTechExperience: CaseReducer<ExperienceState, PayloadAction<{ key: Tech; value: Duration }>> = (
    state,
    { payload: { key, value } }
) => {
    state.techs[key] = value
}

const setTotalExperience: CaseReducer<ExperienceState, PayloadAction<{ totalExperience: Duration }>> = (
    state,
    { payload: { totalExperience } }
) => {
    state.totalExperience = totalExperience
}

const initializeDone: CaseReducer<ExperienceState, Action> = (state) => {
    state.status = 'done'
}

const experienceSlice = createSlice({
    initialState,
    name: 'experience',
    reducers: {
        initializeStart,
        setJob,
        setTechExperience,
        setTotalExperience,
        initializeDone,
    },
})

export default experienceSlice
