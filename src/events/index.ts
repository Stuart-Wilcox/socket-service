import {
    ISocketEventManager,
    SocketEventManager,
    ISocketEventClient,
    InMemoryClient,
    SocketEventCallback,
} from './SocketEventManager';
import { SocketEvent, SocketEventType } from './SocketEvent';

export {
    SocketEvent,
    SocketEventType,
    SocketEventManager,
    ISocketEventManager,
    ISocketEventClient,
    InMemoryClient,
    SocketEventCallback,
};

class SocketEventManagerConf {
    private static instance: SocketEventManager<InMemoryClient>;

    public static getInstance() {
        if (!SocketEventManagerConf.instance) {
            const client = new InMemoryClient();
            SocketEventManagerConf.instance = new SocketEventManager(client);
        }
        return SocketEventManagerConf.instance;
    }
}

export default SocketEventManagerConf;