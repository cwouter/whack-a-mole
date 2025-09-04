import { createSlice } from "@reduxjs/toolkit";


export interface AppState {
    showScoreboard: boolean
    playerName: string
}

const initialState: AppState = {
    showScoreboard: false,
    playerName: "Guacamole"
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
        setPlayerName: (state, action) => {
            state.playerName = action.payload
        },
    },
})

export const { showGame, showScoreboard, setPlayerName } = appSlice.actions
export default appSlice.reducer