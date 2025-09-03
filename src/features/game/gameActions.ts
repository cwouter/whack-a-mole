import { createAction } from "@reduxjs/toolkit";

export const whack = createAction<{ id: number, currentState: 'mole' | 'hole' }>('game/whack')