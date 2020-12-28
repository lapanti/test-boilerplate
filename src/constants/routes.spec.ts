import { routesArray, routesObj } from './routes'

describe('routes', () => {
    describe('routesObj', () => {
        it('should match snapshot', () => {
            expect(routesObj).toMatchInlineSnapshot(`
        Object {
          "cv": Object {
            "exact": true,
            "path": "/cv",
            "title": "CV",
          },
          "setup": Object {
            "exact": true,
            "path": "/setup",
            "title": "setup",
          },
          "whoami": Object {
            "exact": true,
            "path": "/",
            "title": "whoami",
          },
        }
      `)
        })
    })

    describe('routesArray', () => {
        it('should match snapshot', () => {
            expect(routesArray).toMatchInlineSnapshot(`
        Array [
          Object {
            "exact": true,
            "path": "/",
            "title": "whoami",
          },
          Object {
            "exact": true,
            "path": "/cv",
            "title": "CV",
          },
          Object {
            "exact": true,
            "path": "/setup",
            "title": "setup",
          },
        ]
      `)
        })
    })
})
