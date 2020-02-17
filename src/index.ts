import SocketServer from './SocketServer';

const server = new SocketServer({ port: 8000 });
server.start(() => console.log(`Server is listening on ${8000}`));