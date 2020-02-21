import * as SocketIOClient from 'socket.io-client';

export default class SocketClient {
    private socket: SocketIOClient.Socket;

    constructor(url?: string) {
        this.socket = SocketIOClient(url);
    }

    public registerWatch(watchType: string, callback: (payload: any) => void) {
        this.socket.emit('register_watch', watchType);
        this.socket.on(watchType, (payload: any) => callback(payload));
    }

    public unregisterWatch(watchType: string) {
        this.socket.emit('unregister_watch', watchType);
        this.socket.off(watchType);
    }
}