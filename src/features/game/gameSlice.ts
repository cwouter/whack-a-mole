import { createSlice } from "@reduxjs/toolkit";
import { whack } from "./gameActions";
import { act } from "react";

export interface MoleState { [key: number]: { id: number, state: 'mole' | 'hole' } }


export interface GameState {
    moles: MoleState
}

const initialState: GameState = {
    moles: {
        0: { id: 0, state: 'hole' },
        1: { id: 1, state: 'hole' },
        2: { id: 2, state: 'mole' },
        3: { id: 3, state: 'hole' },
        4: { id: 4, state: 'hole' },
        5: { id: 5, state: 'hole' },
        6: { id: 6, state: 'hole' },
        7: { id: 7, state: 'hole' },
        8: { id: 8, state: 'hole' },
        9: { id: 9, state: 'hole' },
        10: { id: 10, state: 'hole' },
        11: { id: 11, state: 'hole' },
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(whack, (state, action) => {
            const moleId = action.payload.id
            const moleState = action.payload.currentState

            if (moleState === 'mole') {
                state.moles[moleId].state = 'hole'
            }
        })
    }
})

export default gameSlice.reducer