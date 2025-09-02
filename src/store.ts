import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/scoreSlice";
import gameReducer from "./features/game/gameSlice";

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        game: gameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store