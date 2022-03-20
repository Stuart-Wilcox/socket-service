import * as BodyParser from 'body-parser';
import SocketServer from './server/SocketServer';
import getRoutes, { IRouteOptions } from './routes';

export interface ISocketServerOptions {
    port: number;
    routeOptions?: IRouteOptions;
};

const createServer = ({
    port,
    routeOptions,
}: ISocketServerOptions) => {
    const server = new SocketServer({ port });
    
    server.use(BodyParser.urlencoded({ extended: false }))
    server.use(BodyParser.json())
    server.use(getRoutes(routeOptions));
};

export default createServer;