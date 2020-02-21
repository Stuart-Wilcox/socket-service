import { SocketEvent, SocketEventType } from './SocketEvent';

export interface ISocketEventManager {
    publish: (socketEvent: SocketEvent) => void;
    subscribe: (callback: (socketEvent: SocketEvent) => void) => void;
}

export class SocketEventManager<T extends ISocketEventClient> implements ISocketEventManager {
    private client: T;

    constructor(client: T) {
        this.client = client;
    }

    publish(socketEvent: SocketEvent) {
        this.client.publish(socketEvent);
    }

    subscribe(callback: (socketEvent: SocketEvent) => void) {
        this.client.onMessage(callback);
    }
}


type SocketEventCallback = (socketEvent: SocketEvent) => void;

export interface ISocketEventClient {
    onMessage: (callback: SocketEventCallback) => void;
    publish: SocketEventCallback;
}

export class InMemoryClient implements ISocketEventClient {
    private cb: SocketEventCallback

    constructor() {
        // set up dummy cb
        this.cb = (arg: any): void => null;
    }

    onMessage(cb: SocketEventCallback) {
        this.cb = cb;
    }

    publish(socketEvent: SocketEvent) {
        this.cb(socketEvent);
    }
}