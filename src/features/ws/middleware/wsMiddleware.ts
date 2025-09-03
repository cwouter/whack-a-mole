import type { Middleware } from "@reduxjs/toolkit";
import { connect, connected, wsDisconnect, disconnected, message, wsSend } from "../store/wsSlice";

export const wsMiddleware: Middleware = store => {
    let socket: WebSocket | null = null;

    return (next) => (action: any) => {
        // console.log(action)
        switch (action.type) {
            case connect.type:
                if (socket) socket.close();
                socket = new WebSocket("ws://localhost:8080/ws");

                socket.onopen = () => {
                    store.dispatch(connected())
                };

                socket.onmessage = event => {
                    const msg = JSON.parse(event.data);
                    store.dispatch(message(msg))
                };

                socket.onclose = () => {
                    store.dispatch(disconnected())
                };
                break;

            case wsSend.type:
                if (socket?.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify(action.payload));
                }
                break;

            case wsDisconnect.type:
                socket?.close();
                socket = null;
                break;

            default:
                break;
        }
        return next(action);
    };
};
