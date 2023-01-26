import { Router } from 'express';
import { OrderRouter } from './protected/orders/orders.router';
import { PlatesRouter } from './protected/plates/plates.router';

export const router = Router();

new PlatesRouter(router).init();
new OrderRouter(router).init();
