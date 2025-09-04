import { createSlice } from "@reduxjs/toolkit";
// import { whack } from "./gameActions";
export interface MoleState { [key: number]: { id: number, state: 'mole' | 'hole', expireAt?: number } }

export interface GameState {
    moles: MoleState
    started: boolean
}

const initialState: GameState = {
    started: false,
    moles: {}
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        started: (state, action) => {
            state.started = true
            state.moles = action.payload.moles
        },
        nomination: (state, action) => {
            const moleId = action.payload.mole.id
            state.moles[moleId].state = action.payload.mole.state
            state.moles[moleId].expireAt = action.payload.expireAt
        },
        ended: (state) => {
            state.started = false
        },
        whack: (state, action) => {
            const moleId = action.payload.id
            const moleState = action.payload.currentState

            if (moleState === 'mole') {
                state.moles[moleId].state = 'hole'
                state.moles[moleId].expireAt = undefined
            }
        }
    }
})

export const { started, nomination, ended, whack } = gameSlice.actions
export default gameSlice.reducer