import type { State } from '../../store'

export const isDarkModeSelector = (state: State): State['theme']['darkMode'] => state.theme.darkMode
