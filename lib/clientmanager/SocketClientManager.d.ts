import * as IO from 'socket.io';
import { SocketEvent } from '../events/SocketEvent';
export declare class SocketClient {
    id: string;
    socket: IO.Socket;
    private watches;
    constructor(socket: IO.Socket);
    hasWatch(watchType: string): boolean;
    addWatch(watchType: string): boolean;
    removeWatch(watchType: string): boolean;
    notify(socketEvent: SocketEvent): void;
}
export declare class SocketClientManager {
    private static instance;
    static getInstance(): SocketClientManager;
    private socketClients;
    constructor();
    addClient(socketClient: SocketClient): void;
    removeClient(socketClient: SocketClient): void;
    notify(socketEvent: SocketEvent): void;
}
