const whoami = { exact: true, path: '/', title: 'whoami' } as const
const cv = { exact: true, path: '/cv', title: 'CV' } as const
const setup = { exact: true, path: '/setup', title: 'setup' } as const

export const routesObj = {
    cv,
    setup,
    whoami,
} as const

export const routesArray = [whoami, cv, setup] as const
