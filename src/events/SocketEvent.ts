export type SocketEventType = string;

export class SocketEvent {
    watchType: SocketEventType;
    payload: any;

    constructor(watchType: string, payload: any) {
        this.watchType = watchType as SocketEventType;
        this.payload = payload;
    }
}