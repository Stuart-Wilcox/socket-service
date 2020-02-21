import * as BodyParser from 'body-parser';
import SocketServer from './server/SocketServer';
import Routes from './routes';

const server = new SocketServer({ port: 8000 });

server.use(BodyParser.urlencoded({ extended: false }))
server.use(BodyParser.json())
server.use(Routes);

server.start(() => console.log(`Server is listening on ${8000}`));