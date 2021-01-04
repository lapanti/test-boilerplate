import compareDesc from 'date-fns/compareDesc'

import { isNonNullable } from '../../../lib/typeGuards'
import type { State } from '../../store'
import type { JobWithDuration } from './slice'

export const statusSelector = (state: State): State['experience']['status'] => state.experience.status

export const jobsArraySelector = (state: State): JobWithDuration[] =>
    Object.values(state.experience.jobs)
        .filter(isNonNullable)
        .sort(({ startDate }, { startDate: startDate2 }) => compareDesc(startDate, startDate2))

export const techsSelector = (state: State): State['experience']['techs'] => state.experience.techs

export const totalExperienceSelector = (state: State): State['experience']['totalExperience'] =>
    state.experience.totalExperience
