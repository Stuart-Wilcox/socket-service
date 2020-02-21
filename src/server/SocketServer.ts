import * as IO from 'socket.io';
import { SocketClientManager, SocketClient } from '../clientmanager/SocketClientManager';
import SocketEventManagerConf from '../events';
import { SocketEvent, SocketEventManager, InMemoryClient } from '../events';
import  { IWebServerOptions } from './WebServer';
import WebServer from './WebServer';

export default class SocketServer extends WebServer {
    private io: IO.Server;
    private socketClientManager: SocketClientManager;
    private socketEventManager: SocketEventManager<InMemoryClient>;

    constructor(options: IWebServerOptions = {}) {
        super(options);
        this.io = IO(this.server);

        this.socketClientManager = SocketClientManager.getInstance();
        this.configureIO();

        this.socketEventManager = SocketEventManagerConf.getInstance();
        this.configureEvents();
    }

    private configureIO() {
        this.io.on('connection', (socket: IO.Socket) => {
            const  socketClient = new SocketClient(socket);
            this.socketClientManager.addClient(socketClient);

            socket.on('disconnect', () => {
                this.socketClientManager.removeClient(socketClient);
            });

            socket.on('register_watch', (watchType: string) => {
                socketClient.addWatch(watchType);
            });

            socket.on('unregister_watch', (watchType: string) => {
                socketClient.removeWatch(watchType);
            });
        })
    }

    private configureEvents() {
        // hook up event manager to clients
        this.socketEventManager.subscribe((socketEvent: SocketEvent) => {
            this.socketClientManager.notify(socketEvent);
        });
    }
}