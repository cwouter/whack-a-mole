import { createSlice } from "@reduxjs/toolkit";


export interface AppState {
    state: 'game' | 'score'
}

const initialState: AppState = {
    state: 'game'
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        startGame: (state) => {
            state.state = 'game'
        },
        endGame: (state) => {
            state.state = 'score'
        },
    },
})

export default appSlice.reducer