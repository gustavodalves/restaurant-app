import { Router } from "express";
import { OrdersController } from "../../../controllers/orders.controller";

export class OrderRouter {
    private controller = new OrdersController();
    constructor(
        private router: Router
    ) {}

    init() {
        this.router.post('/order', this.controller.create)
    }
}
