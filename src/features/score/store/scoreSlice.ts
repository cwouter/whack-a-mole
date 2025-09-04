import { createSlice } from "@reduxjs/toolkit";
// import { whack } from "../../game/store/gameActions";
import { started, whack } from "../../game/store/gameSlice";
import { whacked } from "../../game/store/gameActions";

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
        builder.addCase(whacked, (state, action) => {
            state.value = action.payload.score
        })
        builder.addCase(started, (state) => {
            state.value = 0
        })
    }
})

export default scoreSlice.reducer