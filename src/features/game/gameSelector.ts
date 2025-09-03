import type { RootState } from "../../store";

export const selectMoleList = (state: RootState) => {
    return Object
        .keys(state.game.moles)
        .map((idx: string) => {
            const idxNum = Number(idx)
            return {
                id: idxNum,
                state: state.game.moles[idxNum].state,
            }
        })
}