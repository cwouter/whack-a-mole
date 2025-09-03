import type { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectMoleList = createSelector(
    (state: RootState) => state.game.moles,
    (moles) => {
        return Object
            .keys(moles)
            .map((idx: string) => {
                const idxNum = Number(idx)
                return {
                    id: idxNum,
                    state: moles[idxNum].state,
                }
            })
    }
)