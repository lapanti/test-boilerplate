import type { Action, CaseReducer } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { prefersDarkMode } from '../../../lib/preference'

interface ThemeState {
    darkMode: boolean
}

export const initialState: ThemeState = {
    darkMode: prefersDarkMode(),
}

const toggleDarkMode: CaseReducer<ThemeState, Action> = (state) => {
    state.darkMode = !state.darkMode
}

const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        toggleDarkMode,
    },
})

export default themeSlice
