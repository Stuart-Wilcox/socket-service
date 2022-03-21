import * as IO from 'socket.io';
import * as uuid from 'uuid';
import { SocketEvent } from '../events/SocketEvent';

export class SocketClient {
    public id: string;
    public socket: IO.Socket;
    private watches: Set<string>;

    constructor(socket: IO.Socket) {
        this.id = uuid();
        this.socket = socket;
    }

    hasWatch(watchType: string) {
        return this.watches.has(watchType);
    }

    addWatch(watchType: string): boolean {
        this.watches.add(watchType);
        return true;
    }

    removeWatch(watchType: string): boolean {
        return this.watches.delete(watchType);
    }

    notify(socketEvent: SocketEvent) {
        const { watchType, payload } = socketEvent;
        this.socket.emit(watchType, payload);
    }
};

export class SocketClientManager {
    private static instance: SocketClientManager;

    static getInstance(): SocketClientManager {
        if (!SocketClientManager.instance) {
            SocketClientManager.instance = new SocketClientManager();
        }
        return SocketClientManager.instance;
    }

    private socketClients: Map<string, SocketClient>;

    constructor() {
        this.socketClients = new Map<string, SocketClient>();
    }

    public addClient(socketClient: SocketClient): void {
        this.socketClients.set(socketClient.id, socketClient);
    }

    public removeClient(socketClient: SocketClient): void {
        this.socketClients.delete(socketClient.id);
    }

    public notify(socketEvent: SocketEvent) {
        const { watchType } = socketEvent;
        this.socketClients.forEach(socketClient => {
            if(socketClient.hasWatch(watchType)) {
                setImmediate(() =>
                    socketClient.notify(socketEvent)
                );
            }
        });
    }
};