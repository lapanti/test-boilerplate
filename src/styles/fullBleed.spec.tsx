import fullBleed from './fullBleed'

describe('fullBleed', () => {
    it('should match (default)', () => {
        expect(fullBleed()).toMatchInlineSnapshot(`
            Array [
              "
                grid-column: 1 / -1 !important;
                width: ",
              "100%",
              ";
            ",
            ]
        `)
    })

    it('should match (arg)', () => {
        expect(fullBleed('calc(100% - 8px)')).toMatchInlineSnapshot(`
            Array [
              "
                grid-column: 1 / -1 !important;
                width: ",
              "calc(100% - 8px)",
              ";
            ",
            ]
        `)
    })
})
