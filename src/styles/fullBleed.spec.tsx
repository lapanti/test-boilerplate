import fullBleed from './fullBleed'

describe('fullBleed', () => {
    it('should match', () => {
        expect(fullBleed).toMatchInlineSnapshot(`
      Array [
        "
          grid-column: 1 / -1 !important;
          width: 100%;
      ",
      ]
    `)
    })
})
