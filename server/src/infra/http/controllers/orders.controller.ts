import { Response, Request } from "express";
import { CreateOrder, CreateOrderRequest } from "../../../app/use-cases/orders/create-order";

export class OrdersController {
    async create(request: Request, response: Response) {
        const {
            platesIds
        } = request.body as CreateOrderRequest;

        const createOrder = new CreateOrder()
        const order = await createOrder.execute({
            platesIds
        })

        return response
            .status(201)
            .json(order)
    }
}
