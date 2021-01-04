import { jobsArray, techs } from './jobs'

describe('jobs', () => {
    describe('techs', () => {
        it('should match snapshot', () => {
            expect(techs).toMatchInlineSnapshot(`
                Object {
                  "CSS": "CSS",
                  "HTML": "HTML",
                  "JavaScript": "JavaScript",
                  "Node.js": "Node.js",
                  "React": "React",
                  "Scala": "Scala",
                  "TypeScript": "TypeScript",
                  "redux": "redux",
                  "redux-observable": "redux-observable",
                  "redux-saga": "redux-saga",
                }
            `)
        })
    })

    describe('jobsObj', () => {
        it('should match snapshot', () => {
            expect(jobsArray).toMatchInlineSnapshot(`
                Array [
                  Object {
                    "companyName": "Nokia Solutions and Networks",
                    "description": "Programming in Research- & Development environment with Python.",
                    "endDate": 1377982800000,
                    "id": "nokiaSolutionsAndNetworks",
                    "startDate": 1367355600000,
                    "techs": Array [
                      "JavaScript",
                      "HTML",
                      "CSS",
                    ],
                    "title": "Seasonal trainee",
                  },
                  Object {
                    "companyName": "Pulmaton Solutions Oy",
                    "description": "Development of a cloud-hosted reporting tool with Java, HTML, JavaScript and CSS.",
                    "endDate": 1406840400000,
                    "id": "pulmatonSolutionsOy",
                    "startDate": 1398891600000,
                    "techs": Array [
                      "JavaScript",
                      "HTML",
                      "CSS",
                    ],
                    "title": "Software Developer",
                  },
                  Object {
                    "companyName": "Futurice",
                    "description": "Development in agile software projects, ranging from Android and frontend to backend. Mainly focusing on backend development with Scala and customer communication. Also worked as a tech lead in a medium-sized challenging customer project.",
                    "endDate": 1485900000000,
                    "id": "futurice",
                    "startDate": 1430427600000,
                    "techs": Array [
                      "JavaScript",
                      "Node.js",
                      "HTML",
                      "CSS",
                      "React",
                      "redux",
                      "redux-observable",
                      "Scala",
                    ],
                    "title": "Software Developer",
                  },
                  Object {
                    "companyName": "Zalando SE",
                    "description": "Working mainly with building multiple internal tools for fashion domain experts using React, TypeScript etc. in an agile fashion, including a tool with 2-dimensional graph visualisation using D3 and PIXI.js. I also interviewed frontend/full-stack developers.",
                    "endDate": 1514757600000,
                    "id": "zalando",
                    "startDate": 1488319200000,
                    "techs": Array [
                      "TypeScript",
                      "JavaScript",
                      "Node.js",
                      "HTML",
                      "CSS",
                      "React",
                      "redux",
                      "redux-observable",
                    ],
                    "title": "SW Engineer",
                  },
                  Object {
                    "companyName": "Gofore / Solinor Oy",
                    "description": "I worked at Solinor for a bit over one year, after which Gofore bought the company. During my whole tenure I worked at two large PaaS projects, using TypeScript, JavaScript, Node.js, React, redux, etc. At Solinor I interviewed candidates in all rounds, at Gofore I only did technical interviews.",
                    "endDate": 1569877200000,
                    "id": "goforeSolinorOy",
                    "startDate": 1514757600000,
                    "techs": Array [
                      "TypeScript",
                      "JavaScript",
                      "Node.js",
                      "HTML",
                      "CSS",
                      "React",
                      "redux",
                      "redux-saga",
                    ],
                    "title": "Software Developer",
                  },
                  Object {
                    "companyName": "Verkkokauppa.com Oyj",
                    "description": "Maintaining and developing new features for the Verkkokauppa.com webstore, using TypeScript, JavaScript, React, redux, HTML, CSS and more.",
                    "id": "verkkokauppaComOyj",
                    "startDate": 1569877200000,
                    "techs": Array [
                      "TypeScript",
                      "JavaScript",
                      "Node.js",
                      "HTML",
                      "CSS",
                      "React",
                      "redux",
                      "redux-saga",
                    ],
                    "title": "Software Developer",
                  },
                ]
            `)
        })
    })
})
