import { IWebServerOptions } from './WebServer';
import WebServer from './WebServer';
export default class SocketServer extends WebServer {
    private io;
    private socketClientManager;
    private socketEventManager;
    constructor(options?: IWebServerOptions);
    private configureIO;
    private configureEvents;
}
