import { createSlice } from "@reduxjs/toolkit";
import { started } from "../../game/store/gameSlice";
import { whacked } from "../../game/store/gameActions";

interface Highscore {
    score: number,
    player: string,
}

export interface ScoreState {
    value: number,
    highscores: Highscore[]
}

const initialState: ScoreState = {
    value: 0,
    highscores: []
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        update: (state, action) => {
            state.highscores = action.payload.highscores
        }
    },
    extraReducers: (builder) => {
        builder.addCase(whacked, (state, action) => {
            state.value = action.payload.totalScore
        })
        builder.addCase(started, (state) => {
            state.value = 0
        })
    }
})

export default scoreSlice.reducer