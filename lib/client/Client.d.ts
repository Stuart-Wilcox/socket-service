export default class SocketClient {
    private socket;
    constructor(url?: string);
    registerWatch(watchType: string, callback: (payload: any) => void): void;
    unregisterWatch(watchType: string): void;
}
