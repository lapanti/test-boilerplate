import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all, call } from 'redux-saga/effects'

import experienceSagas from './ducks/experience/sagas'
import experienceSlice, { initialState as experience } from './ducks/experience/slice'
import themeSlice, { initialState as theme } from './ducks/theme/slice'

const reducer = combineReducers({ experience: experienceSlice.reducer, theme: themeSlice.reducer })

export type State = ReturnType<typeof reducer>

const sagaMiddleware = createSagaMiddleware()

const rootSaga = function* () {
    yield all([experienceSagas].map((saga) => call(saga)))
}

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    reducer,
})

sagaMiddleware.run(rootSaga)

type PartialState = Partial<{ experience: Partial<typeof experience>; theme: Partial<typeof theme> }>

export const mockState = (state: PartialState): State => ({
    experience: { ...experience, ...state?.experience },
    theme: { ...theme, ...state?.theme },
})

export const mockStore = (state: PartialState = {}): typeof store =>
    configureStore({ preloadedState: mockState(state), reducer })

export default store
