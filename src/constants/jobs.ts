export const techs = {
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    'Node.js': 'Node.js',
    HTML: 'HTML',
    CSS: 'CSS',
    React: 'React',
    redux: 'redux',
    'redux-observable': 'redux-observable',
    'redux-saga': 'redux-saga',
    Scala: 'Scala',
} as const

export type Tech = typeof techs[keyof typeof techs]

export type JobKey =
    | 'nokiaSolutionsAndNetworks'
    | 'pulmatonSolutionsOy'
    | 'futurice'
    | 'zalando'
    | 'goforeSolinorOy'
    | 'verkkokauppaComOyj'

export interface Job {
    id: JobKey
    companyName: string
    title: string
    description: string
    techs: Tech[]
    startDate: number
    endDate?: number
}

export const jobsArray: Job[] = [
    {
        id: 'nokiaSolutionsAndNetworks',
        companyName: 'Nokia Solutions and Networks',
        title: 'Seasonal trainee',
        description: 'Programming in Research- & Development environment with Python.',
        techs: [techs.JavaScript, techs.HTML, techs.CSS],
        startDate: new Date(2013, 4).getTime(),
        endDate: new Date(2013, 8).getTime(),
    },
    {
        id: 'pulmatonSolutionsOy',
        companyName: 'Pulmaton Solutions Oy',
        title: 'Software Developer',
        description: 'Development of a cloud-hosted reporting tool with Java, HTML, JavaScript and CSS.',
        techs: [techs.JavaScript, techs.HTML, techs.CSS],
        startDate: new Date(2014, 4).getTime(),
        endDate: new Date(2014, 7).getTime(),
    },
    {
        id: 'futurice',
        companyName: 'Futurice',
        title: 'Software Developer',
        description:
            'Development in agile software projects, ranging from Android and frontend to backend. Mainly focusing on backend development with Scala and customer communication. Also worked as a tech lead in a medium-sized challenging customer project.',
        techs: [
            techs.JavaScript,
            techs['Node.js'],
            techs.HTML,
            techs.CSS,
            techs.React,
            techs.redux,
            techs['redux-observable'],
            techs.Scala,
        ],
        startDate: new Date(2015, 4).getTime(),
        endDate: new Date(2017, 1).getTime(),
    },
    {
        id: 'zalando',
        companyName: 'Zalando SE',
        title: 'SW Engineer',
        description:
            'Working mainly with building multiple internal tools for fashion domain experts using React, TypeScript etc. in an agile fashion, including a tool with 2-dimensional graph visualisation using D3 and PIXI.js. I also interviewed frontend/full-stack developers.',
        techs: [
            techs.TypeScript,
            techs.JavaScript,
            techs['Node.js'],
            techs.HTML,
            techs.CSS,
            techs.React,
            techs.redux,
            techs['redux-observable'],
        ],
        startDate: new Date(2017, 2).getTime(),
        endDate: new Date(2018, 0).getTime(),
    },
    {
        id: 'goforeSolinorOy',
        companyName: 'Gofore / Solinor Oy',
        title: 'Software Developer',
        description:
            'I worked at Solinor for a bit over one year, after which Gofore bought the company. During my whole tenure I worked at two large PaaS projects, using TypeScript, JavaScript, Node.js, React, redux, etc. At Solinor I interviewed candidates in all rounds, at Gofore I only did technical interviews.',
        techs: [
            techs.TypeScript,
            techs.JavaScript,
            techs['Node.js'],
            techs.HTML,
            techs.CSS,
            techs.React,
            techs.redux,
            techs['redux-saga'],
        ],
        startDate: new Date(2018, 0).getTime(),
        endDate: new Date(2019, 9).getTime(),
    },
    {
        id: 'verkkokauppaComOyj',
        companyName: 'Verkkokauppa.com Oyj',
        title: 'Software Developer',
        description:
            'Maintaining and developing new features for the Verkkokauppa.com webstore, using TypeScript, JavaScript, React, redux, HTML, CSS and more.',
        techs: [
            techs.TypeScript,
            techs.JavaScript,
            techs['Node.js'],
            techs.HTML,
            techs.CSS,
            techs.React,
            techs.redux,
            techs['redux-saga'],
        ],
        startDate: new Date(2019, 9).getTime(),
    },
]
