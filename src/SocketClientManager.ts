import * as IO from 'socket.io';
import * as uuid from 'uuid';

export class SocketClient {
    public id: string;
    public socket: IO.Socket;

    constructor(socket: IO.Socket) {
        this.id = uuid();
        this.socket = socket;
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

    public add(socketClient: SocketClient): void {
        this.socketClients.set(socketClient.id, socketClient);
    }

    public remove(socketClient: SocketClient): void {
        this.socketClients.delete(socketClient.id);
    }
};