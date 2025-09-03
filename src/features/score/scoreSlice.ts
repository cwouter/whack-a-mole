import { createSlice } from "@reduxjs/toolkit";
import { whack } from "../game/gameActions";

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
    },
    extraReducers: (builder) => {
        builder.addCase(whack, (state, action) => {
            const moleState = action.payload.currentState
            if (moleState === 'mole') {
                state.value += 1
            }
        })
    }
})

export default scoreSlice.reducer