import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/store/scoreSlice";
import gameReducer from "./features/game/store/gameSlice";
import { wsMiddleware } from "./features/ws/middleware/wsMiddleware";
import wsReducer from "./features/ws/store/wsSlice";
import appReducer from "./features/app/store/appSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        score: scoreReducer,
        game: gameReducer,
        ws: wsReducer,
    },
    middleware: (get) => get().prepend(wsMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store