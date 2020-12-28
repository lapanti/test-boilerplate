import { combineReducers, configureStore } from '@reduxjs/toolkit'

import themeSlice, { initialState as theme } from './ducks/theme/slice'

const reducer = combineReducers({ theme: themeSlice.reducer })

export type State = ReturnType<typeof reducer>

const store = configureStore({
    reducer,
})

export const mockStore = (state: Partial<State> = {}): typeof store =>
    configureStore({ preloadedState: { theme, ...state }, reducer })

export default store
