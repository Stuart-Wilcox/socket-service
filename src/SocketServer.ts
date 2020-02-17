import * as IO from 'socket.io';
import { SocketClientManager, SocketClient } from './SocketClientManager';
import  { IWebServerOptions } from './WebServer';
import WebServer from './WebServer';

export default class SocketServer extends WebServer {
    private io: IO.Server;
    private socketClientManager: SocketClientManager;

    constructor(options: IWebServerOptions = {}) {
        super(options);
        this.io = IO(this.server);
        this.socketClientManager = SocketClientManager.getInstance();
        this.configureIO();
    }

    private configureIO() {
        this.io.on('connection', (socket: IO.Socket) => {
            const  socketClient = new SocketClient(socket);
            this.socketClientManager.add(socketClient);

            socket.on('disconnect', () => {
                this.socketClientManager.remove(socketClient);
            });

            socket.on('register_watch', (type: string) => {
                // TODO handle register for watch
            });

            socket.on('unregister_watch', (type: string) => {
                // TODO handle unregister for watch
            });
        })
    }
}