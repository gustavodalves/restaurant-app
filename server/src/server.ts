import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import { router } from './infra/http/routes';

const app = express();

app.use(express.json());
app.use(router);

const httpServer = http.createServer(app);
export const io = new socketio.Server(httpServer);

try {
    httpServer.listen(3000);
    console.log('Server is running at port 3000');
} catch {
    console.error('server is not running');
}
