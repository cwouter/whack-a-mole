import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type OutEvent =
    | { event: "welcome"; payload: { msg: string; time: number } }
    | { event: "pong"; payload: { time: number; payload?: { hello?: string } } }
    | { event: "echo"; payload: unknown }
    | { event: "message"; payload: { msg: string } }
    | { event: "broadcast_ack"; payload: { delivered: boolean } }
    | { event: "game:started"; payload: { moles: Record<number, { id: number; state: "mole" | "hole" }>; endsAt: number } }
    | { event: "game:ended"; payload: { endedAt: number } }
    | { event: "error"; payload: { message: string; detail?: string } };

type WSState = {
    connected: boolean;
    lastEvent?: OutEvent;
    messages: string[];
    error?: string;
};

const initialState: WSState = {
    connected: false,
    messages: []
};

export const wsSend = createAction<{ event: string, payload: unknown }>("ws/send")
export const wsDisconnect = createAction<{ event: string, payload: unknown }>("ws/disconnect")

const wsSlice = createSlice({
    name: "ws",
    initialState,
    reducers: {
        connect(state) {
            state.connected = false;
        },
        connected(state) {
            state.connected = true;
            state.error = undefined;
        },
        disconnected(state) {
            state.connected = false;
        },
        message(state, action: PayloadAction<OutEvent>) {
            console.log("message received", action.payload)
            // state.lastEvent = action.payload;
            // if (action.payload.event === "message") {
            //     state.messages.push(action.payload.payload.msg);
            // }
        },
        error(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }
});

export const { connect, connected, disconnected, message, error } = wsSlice.actions;
export default wsSlice.reducer;
