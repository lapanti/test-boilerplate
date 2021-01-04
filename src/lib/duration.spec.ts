import { diffDuration, durationToString, sumDurations } from './duration'

describe('duration', () => {
    describe('sumDurations', () => {
        it('should sum two full durations', () => {
            const duration1: Duration = { years: 1, months: 2, days: 4, hours: 5, minutes: 6, seconds: 7 }
            const duration2: Duration = { years: 7, months: 6, days: 4, hours: 3, minutes: 2, seconds: 1 }
            expect(sumDurations(duration1, duration2)).toEqual({
                years: 8,
                months: 8,
                days: 8,
                hours: 8,
                minutes: 8,
                seconds: 8,
            })
        })

        it('should sum two partial durations (I of II)', () => {
            const duration1: Duration = { years: 1, months: 2, days: 4 }
            const duration2: Duration = { hours: 5, minutes: 6, seconds: 7 }
            expect(sumDurations(duration1, duration2)).toEqual({
                years: 1,
                months: 2,
                days: 4,
                hours: 5,
                minutes: 6,
                seconds: 7,
            })
        })

        it('should sum two partial durations (II of II)', () => {
            const duration1: Duration = { hours: 5, minutes: 6, seconds: 7 }
            const duration2: Duration = { years: 1, months: 2, days: 4 }
            expect(sumDurations(duration1, duration2)).toEqual({
                years: 1,
                months: 2,
                days: 4,
                hours: 5,
                minutes: 6,
                seconds: 7,
            })
        })

        it('should sum one full duration', () => {
            const duration1: Duration = { years: 1, months: 2, days: 4, hours: 5, minutes: 6, seconds: 7 }
            expect(sumDurations(duration1)).toEqual({
                years: 1,
                months: 2,
                days: 4,
                hours: 5,
                minutes: 6,
                seconds: 7,
            })
        })

        it('should sum one partial duration', () => {
            const duration1: Duration = { days: 4 }
            expect(sumDurations(duration1)).toEqual({ years: 0, months: 0, days: 4, hours: 0, minutes: 0, seconds: 0 })
        })

        it('should sum one empty duration', () => {
            const duration1: Duration = {}
            expect(sumDurations(duration1)).toEqual({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
        })

        it('should sum values that go over', () => {
            const duration1: Duration = { years: 1, months: 11, days: 30, hours: 23, minutes: 59, seconds: 59 }
            const duration2: Duration = { years: 0, months: 2, days: 2, hours: 2, minutes: 2, seconds: 2 }
            expect(sumDurations(duration1, duration2)).toEqual({
                years: 2,
                months: 2,
                days: 2,
                hours: 2,
                minutes: 2,
                seconds: 1,
            })
        })
    })

    describe('diffDuration', () => {
        it('should return correct values', () => {
            const fullDuration: Duration = { years: 10, months: 10, days: 10, hours: 10, minutes: 10, seconds: 10 }
            const zeroPercent: Duration = {}
            const tenPercent: Duration = { years: 1, months: 1, days: 1, hours: 1, minutes: 1, seconds: 1 }
            const fiftyPercent: Duration = { years: 5, months: 5, days: 5, hours: 5, minutes: 5, seconds: 5 }
            const eightyPercent: Duration = { years: 8, months: 8, days: 8, hours: 8, minutes: 8, seconds: 8 }
            expect(diffDuration(eightyPercent, fullDuration)).toEqual(80)
            expect(diffDuration(fiftyPercent, fullDuration)).toEqual(50)
            expect(diffDuration(tenPercent, fullDuration)).toEqual(10)
            expect(diffDuration(zeroPercent, fullDuration)).toEqual(0)
            expect(diffDuration(fullDuration)).toEqual(0)
        })
    })

    describe('durationToString', () => {
        it('should format years and months', () => {
            const years = 5
            const months = 4
            expect(durationToString({ years, months })).toEqual(`${years} years ${months} months`)
        })

        it('should format years', () => {
            const years = 5
            expect(durationToString({ years })).toEqual(`${years} years`)
        })

        it('should format months', () => {
            const months = 4
            expect(durationToString({ months })).toEqual(`${months} months`)
        })
    })
})
