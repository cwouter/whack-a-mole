import { createAction, type Middleware } from "@reduxjs/toolkit";
import { connect, connected, wsDisconnect, disconnected, wsSend, error as wsError } from "../store/wsSlice";

export const wsMiddleware: Middleware = store => {
    let socket: WebSocket | null = null;

    return (next) => (action: any) => {
        console.log(action)
        switch (action.type) {
            case connect.type:
                if (socket) {
                    if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
                        break; // Avoid duplicate connections in React StrictMode
                    }
                    socket.close();
                    socket = null;
                }
                socket = new WebSocket("ws://localhost:8080/ws");

                socket.onopen = () => {
                    store.dispatch(connected())
                };

                socket.onmessage = event => {
                    const msg = JSON.parse(event.data);
                    const action = createAction(msg.event)
                    store.dispatch(action(msg.payload))
                };

                socket.onerror = () => {
                    store.dispatch(wsError("WebSocket error"));
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
