/// <reference types="node" />
import * as Http from 'http';
import * as Express from 'express';
export interface IWebServer {
    start: (cb?: () => void) => Promise<boolean>;
    stop: (cb?: () => void) => Promise<boolean>;
    use: (requestHandler: Express.RequestHandler) => void;
}
export interface IWebServerOptions {
    port?: number | string;
    host?: string;
}
export default class WebServer implements IWebServer {
    protected app: Express.Application;
    protected server: Http.Server;
    private port;
    private host;
    private state;
    constructor(options?: IWebServerOptions);
    start(cb?: () => void): Promise<boolean>;
    stop(cb?: () => void): Promise<boolean>;
    use(requestHandler: Express.RequestHandler): void;
}
