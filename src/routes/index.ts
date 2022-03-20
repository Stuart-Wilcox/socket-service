import * as Express from 'express';
import SocketEventManager from '../events';
import { SocketEvent } from '../events';

export interface IRouteOptions {
    enableHealthCheck?: boolean;
    postEventRoute?: string;
};

const defaultRouteOptions: IRouteOptions = {
    enableHealthCheck: true,
    postEventRoute: '/event',
};

const getRoutes = ({
    enableHealthCheck,
    postEventRoute,
}: IRouteOptions = defaultRouteOptions) => {
    const router = Express.Router();
    const socketEventManager = SocketEventManager.getInstance();
    
    if (enableHealthCheck) {
        router.get('*', (req, res) => {
            return res.send('Hello world');
        });
    }
    
    router.post(postEventRoute, (req, res) => {
        const { watchType, payload } = req.body;
    
        if (watchType && watchType as string) {
            const socketEvent = new SocketEvent(watchType, payload);
            socketEventManager.publish(socketEvent);
        }
    });

    return router;
};

export default getRoutes;