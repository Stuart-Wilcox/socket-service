import { IRouteOptions } from './routes';
export interface ISocketServerOptions {
    port: number;
    routeOptions?: IRouteOptions;
}
export * from './types';
declare const createServer: ({ port, routeOptions, }: ISocketServerOptions) => void;
export default createServer;
