import { createSlice } from "@reduxjs/toolkit";

export interface ScoreState {
    value: number
}

const initialState: ScoreState = {
    value: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state: ScoreState) => {
            state.value += 1
        },
        decrement: (state: ScoreState) => {
            state.value -= 1
        },
    },
})

export const { increment, decrement } = scoreSlice.actions
export default scoreSlice.reducer