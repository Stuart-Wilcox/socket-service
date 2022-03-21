import { ISocketEventManager, SocketEventManager, ISocketEventClient, InMemoryClient, SocketEventCallback } from './SocketEventManager';
import { SocketEvent, SocketEventType } from './SocketEvent';
export { SocketEvent, SocketEventType, SocketEventManager, ISocketEventManager, ISocketEventClient, InMemoryClient, SocketEventCallback, };
declare class SocketEventManagerConf {
    private static instance;
    static getInstance(): SocketEventManager<InMemoryClient>;
}
export default SocketEventManagerConf;
