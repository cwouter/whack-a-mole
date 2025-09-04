import { createSlice } from "@reduxjs/toolkit";


export interface AppState {
    showScoreboard: boolean
}

const initialState: AppState = {
    showScoreboard: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showGame: (state) => {
            state.showScoreboard = false
        },
        showScoreboard: (state) => {
            state.showScoreboard = true
        },
    },
})

export const { showGame, showScoreboard } = appSlice.actions
export default appSlice.reducer