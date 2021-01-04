import intervalToDuration from 'date-fns/intervalToDuration'

import { techs } from '../../../constants/jobs'
import { mockState } from '../../store'
import { statusSelector, techsSelector, totalExperienceSelector } from './selectors'
import type { JobWithDuration } from './slice'
import experienceSlice, { initialState } from './slice'

jest.mock('../../../lib/preference', () => ({
    prefersDarkMode: jest.fn().mockReturnValue(true),
}))

describe('experience', () => {
    describe('initialState', () => {
        it('should match snapshot', () => {
            expect(initialState).toMatchInlineSnapshot(`
                Object {
                  "jobs": Object {},
                  "status": "",
                  "techs": Object {},
                }
            `)
        })
    })

    describe('actions', () => {
        describe('initializeStart', () => {
            it('should match snapshot', () => {
                expect(experienceSlice.actions.initializeStart()).toMatchInlineSnapshot(`
                    Object {
                      "payload": undefined,
                      "type": "experience/initializeStart",
                    }
                `)
            })
        })

        describe('setJob', () => {
            it('should match snapshot', () => {
                expect(
                    experienceSlice.actions.setJob({
                        key: 'nokiaSolutionsAndNetworks',
                        job: {
                            id: 'nokiaSolutionsAndNetworks',
                            companyName: '',
                            title: '',
                            description: '',
                            techs: [],
                            startDate: new Date(2000, 1).valueOf(),
                            duration: intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) }),
                        },
                    })
                ).toMatchInlineSnapshot(`
                    Object {
                      "payload": Object {
                        "job": Object {
                          "companyName": "",
                          "description": "",
                          "duration": Object {
                            "days": 0,
                            "hours": 0,
                            "minutes": 0,
                            "months": 0,
                            "seconds": 0,
                            "years": 10,
                          },
                          "id": "nokiaSolutionsAndNetworks",
                          "startDate": 949356000000,
                          "techs": Array [],
                          "title": "",
                        },
                        "key": "nokiaSolutionsAndNetworks",
                      },
                      "type": "experience/setJob",
                    }
                `)
            })
        })

        describe('setTechExperience', () => {
            it('should match snapshot', () => {
                expect(
                    experienceSlice.actions.setTechExperience({
                        key: techs.TypeScript,
                        value: intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) }),
                    })
                ).toMatchInlineSnapshot(`
                    Object {
                      "payload": Object {
                        "key": "TypeScript",
                        "value": Object {
                          "days": 0,
                          "hours": 0,
                          "minutes": 0,
                          "months": 0,
                          "seconds": 0,
                          "years": 10,
                        },
                      },
                      "type": "experience/setTechExperience",
                    }
                `)
            })
        })

        describe('setTotalExperience', () => {
            it('should match snapshot', () => {
                expect(
                    experienceSlice.actions.setTotalExperience({
                        totalExperience: intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) }),
                    })
                ).toMatchInlineSnapshot(`
                    Object {
                      "payload": Object {
                        "totalExperience": Object {
                          "days": 0,
                          "hours": 0,
                          "minutes": 0,
                          "months": 0,
                          "seconds": 0,
                          "years": 10,
                        },
                      },
                      "type": "experience/setTotalExperience",
                    }
                `)
            })
        })
    })

    describe('reducers', () => {
        describe('initializeStart', () => {
            it('should set loading to true', () => {
                const experience = experienceSlice.reducer(initialState, experienceSlice.actions.initializeStart())
                expect(statusSelector(mockState({ experience }))).toEqual('loading')
                expect(experience).toMatchInlineSnapshot(`
                    Object {
                      "jobs": Object {},
                      "status": "loading",
                      "techs": Object {},
                    }
                `)
            })
        })

        describe('setJob', () => {
            it('should save correct job', () => {
                const job: JobWithDuration = {
                    id: 'futurice',
                    companyName: '',
                    title: '',
                    description: '',
                    techs: [],
                    startDate: new Date(2000, 1).valueOf(),
                    duration: intervalToDuration({ start: new Date(2000, 0), end: new Date(2000, 1) }),
                }
                const experience = experienceSlice.reducer(
                    initialState,
                    experienceSlice.actions.setJob({ key: job.id, job })
                )
                expect(experience.jobs[job.id]).toEqual(job)
                expect(experience).toMatchInlineSnapshot(`
                    Object {
                      "jobs": Object {
                        "futurice": Object {
                          "companyName": "",
                          "description": "",
                          "duration": Object {
                            "days": 0,
                            "hours": 0,
                            "minutes": 0,
                            "months": 1,
                            "seconds": 0,
                            "years": 0,
                          },
                          "id": "futurice",
                          "startDate": 949356000000,
                          "techs": Array [],
                          "title": "",
                        },
                      },
                      "status": "",
                      "techs": Object {},
                    }
                `)
            })
        })

        describe('setTechExperience', () => {
            it('should save correct tech experience', () => {
                const key = techs.TypeScript
                const value = intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) })
                const experience = experienceSlice.reducer(
                    initialState,
                    experienceSlice.actions.setTechExperience({ key, value })
                )
                expect(techsSelector(mockState({ experience }))).toEqual({ [key]: value })
                expect(experience).toMatchInlineSnapshot(`
                    Object {
                      "jobs": Object {},
                      "status": "",
                      "techs": Object {
                        "TypeScript": Object {
                          "days": 0,
                          "hours": 0,
                          "minutes": 0,
                          "months": 0,
                          "seconds": 0,
                          "years": 10,
                        },
                      },
                    }
                `)
            })
        })

        describe('setTotalExperience', () => {
            it('should save correct experience', () => {
                const totalExperience = intervalToDuration({ start: new Date(2000, 1), end: new Date(2010, 1) })
                const experience = experienceSlice.reducer(
                    initialState,
                    experienceSlice.actions.setTotalExperience({ totalExperience })
                )
                expect(totalExperienceSelector(mockState({ experience }))).toEqual(totalExperience)
                expect(experience).toMatchInlineSnapshot(`
                    Object {
                      "jobs": Object {},
                      "status": "",
                      "techs": Object {},
                      "totalExperience": Object {
                        "days": 0,
                        "hours": 0,
                        "minutes": 0,
                        "months": 0,
                        "seconds": 0,
                        "years": 10,
                      },
                    }
                `)
            })
        })

        describe('initializeDone', () => {
            it('should set loading to false', () => {
                const experience = experienceSlice.reducer(initialState, experienceSlice.actions.initializeDone())
                expect(statusSelector(mockState({ experience }))).toEqual('done')
                expect(experience).toMatchInlineSnapshot(`
                    Object {
                      "jobs": Object {},
                      "status": "done",
                      "techs": Object {},
                    }
                `)
            })
        })
    })
})
