export declare type SocketEventType = string;
export declare class SocketEvent {
    watchType: SocketEventType;
    payload: any;
    constructor(watchType: string, payload: any);
}
