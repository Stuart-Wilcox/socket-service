import createServer from 'socket-server';
import type { ISocketServerOptions } from 'socket-server';

const socketServerOptions: ISocketServerOptions = {
    port: 8000,
};

const server = createServer(socketServerOptions);

server.listen();