import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface MoleState {
    id: number,
    state: 'mole' | 'hole',
}

export interface GameState {
    moles: { [key: MoleState['id']]: MoleState }
}

const initialState: GameState = {
    moles: {
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
        12: { id: 12, state: 'hole' },
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        whack: (state: GameState, action: PayloadAction<number>) => {
            const mole = state.moles[action.payload]
            if (mole.state === 'mole') {
                state.moles[action.payload].state = 'hole'
            }
        },
    },
})

export const { whack } = gameSlice.actions
export default gameSlice.reducer