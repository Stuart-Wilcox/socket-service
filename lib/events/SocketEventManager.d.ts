import { SocketEvent } from './SocketEvent';
export interface ISocketEventManager {
    publish: (socketEvent: SocketEvent) => void;
    subscribe: (callback: (socketEvent: SocketEvent) => void) => void;
}
export declare class SocketEventManager<T extends ISocketEventClient> implements ISocketEventManager {
    private client;
    constructor(client: T);
    publish(socketEvent: SocketEvent): void;
    subscribe(callback: (socketEvent: SocketEvent) => void): void;
}
export declare type SocketEventCallback = (socketEvent: SocketEvent) => void;
export interface ISocketEventClient {
    onMessage: (callback: SocketEventCallback) => void;
    publish: SocketEventCallback;
}
export declare class InMemoryClient implements ISocketEventClient {
    private cb;
    constructor();
    onMessage(cb: SocketEventCallback): void;
    publish(socketEvent: SocketEvent): void;
}
