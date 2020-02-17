import * as Http from 'http';
import * as Express from 'express';


export interface IWebServer {
    start: (cb?: ()=>void) => Promise<boolean>;
    stop: (cb?: ()=>void) => Promise<boolean>;
};

export interface IWebServerOptions {
    port?: number | string;
    host?: string;
};

enum WebServerState {
    IDLE,
    STARTING,
    RUNNING,
    STOPPING,
};

export default class WebServer implements IWebServer {
    protected app: Express.Application;
    protected server: Http.Server;

    private port: number | string;
    private host: string;

    private state: WebServerState;

    constructor(options: IWebServerOptions = {}) {
        const {
            port=process.env.PORT || 8000,
            host='',
        } = options;

        this.app = Express();
        this.server = Http.createServer(this.app);

        this.port = port;
        this.host = host;

        this.state = WebServerState.IDLE;
    }

    public async start(cb?: ()=>void) {
        if (this.state !== WebServerState.IDLE) {
            return false;
        }

        this.state = WebServerState.STARTING;
        const options = {
            port: this.port,
            host: this.host,
        };

        return new Promise<boolean>(resolve => {
            this.server.listen(options, () => {
                this.state = WebServerState.RUNNING;
                resolve(true);
                if (cb) {
                    cb();
                }
            });
        });
    }

    public async stop(cb?: ()=>void) {
        if (this.state !== WebServerState.RUNNING) {
            return false
        }

        this.state = WebServerState.STOPPING;
        return new Promise<boolean>(resolve => {
            this.server.close(() => {
                this.state = WebServerState.IDLE;
                resolve(true);
                if (cb) {
                    cb();
                }
            });
        });
    }
}

