import SocketServer from './server/SocketServer';
import { IRouteOptions } from './routes';
export interface ISocketServerOptions {
    port: number;
    routeOptions?: IRouteOptions;
}
export * from './types';
declare const createServer: ({ port, routeOptions, }: ISocketServerOptions) => SocketServer;
export default createServer;
