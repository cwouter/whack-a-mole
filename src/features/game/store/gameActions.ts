import type { AppDispatch } from "../../../store";
import { wsSend } from "../../ws/store/wsSlice";
import { whack } from "./gameSlice";
import { createAction } from "@reduxjs/toolkit";

export const whacked = createAction<{ id: number, totalScore: number }>('game/whacked')

export const applyWhack = (id: number, currentState: 'mole' | 'hole') => (dispatch: AppDispatch) => {
    dispatch(wsSend({ event: 'game/whack', payload: { id } }));
    dispatch(whack({ id, currentState }))
}