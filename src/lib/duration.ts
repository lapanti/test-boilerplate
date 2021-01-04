import formatDuration from 'date-fns/formatDuration'

const secondsInMinute = 60
const minutesInHour = 60
const hoursInDay = 24
const daysInMonth = 31
const monthsInYear = 12

export const sumDurations = (duration1: Duration, duration2?: Duration): Duration => {
    const secondsTemp = (duration1.seconds || 0) + (duration2?.seconds || 0)
    const seconds = secondsTemp % secondsInMinute
    const minutesTemp = (duration1.minutes || 0) + (duration2?.minutes || 0) + (secondsTemp - seconds) / secondsInMinute
    const minutes = minutesTemp % minutesInHour
    const hoursTemp = (duration1.hours || 0) + (duration2?.hours || 0) + (minutesTemp - minutes) / minutesInHour
    const hours = hoursTemp % hoursInDay
    const daysTemp = (duration1.days || 0) + (duration2?.days || 0) + (hoursTemp - hours) / hoursInDay
    const days = daysTemp % daysInMonth
    const monthsTemp = (duration1.months || 0) + (duration2?.months || 0) + (daysTemp - days) / daysInMonth
    const months = monthsTemp % monthsInYear
    const years = (duration1.years || 0) + (duration2?.years || 0) + (monthsTemp - months) / monthsInYear
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
    }
}

const durationToSeconds = (duration: Duration): number =>
    (((((duration?.years || 0) * monthsInYear + (duration?.months || 0)) * daysInMonth + (duration?.days || 0)) *
        hoursInDay +
        (duration?.hours || 0)) *
        minutesInHour +
        (duration?.minutes || 0)) *
        secondsInMinute +
    (duration?.seconds || 0)

/** Returns the percentage (0-100%) that duration1 is from duration2 */
export const diffDuration = (duration1: Duration, duration2?: Duration): number =>
    !duration2 ? 0 : (durationToSeconds(duration1) / durationToSeconds(duration2)) * 100

export const durationToString = (duration: Duration): string =>
    formatDuration(duration, { format: ['years', 'months'] })
