import { SocketEventManager, ISocketEventClient, InMemoryClient } from './SocketEventManager';
import { SocketEvent } from './SocketEvent';

export {
    SocketEvent,
    SocketEventManager,
    ISocketEventClient,
    InMemoryClient, 
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