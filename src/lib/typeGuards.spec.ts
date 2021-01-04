import { isNonNullable } from './typeGuards'

describe('typeGuards', () => {
    describe('isNonNullable', () => {
        it('should filter nulls from array', () => {
            const notNulls = [1, 2, 3, 4]
            const withNulls = [null, ...notNulls, null]
            expect(withNulls.filter(isNonNullable)).toEqual(notNulls)
        })

        it('should filter undefineds from array', () => {
            const notUndefined = [1, 2, 3, 4]
            const withUndefined = [undefined, ...notUndefined, undefined]
            expect(withUndefined.filter(isNonNullable)).toEqual(notUndefined)
        })

        it('should not filter falsy values', () => {
            const falsies = [0, false, '', -1]
            expect(falsies.filter(isNonNullable)).toEqual(falsies)
        })
    })
})
