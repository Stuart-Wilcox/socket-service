import * as Express from 'express';
import SocketEventManager from '../events';
import { SocketEvent } from '../events';

const router = Express.Router();
const socketEventManager = SocketEventManager.getInstance();

router.get('*', (req, res) => {
    return res.send('Hello world');
});

router.post('/event', (req, res) => {
    const { watchType, payload } = req.body;

    if (watchType && watchType as string) {
        const socketEvent = new SocketEvent(watchType, payload);
        socketEventManager.publish(socketEvent);
    }
});

export default router;