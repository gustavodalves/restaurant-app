import { prisma } from "../../../infra/database/prisma/prisma-client";
import { OrderRouter } from "../../../infra/http/routes/protected/orders/orders.router";

export interface FinishOrderRequest {
    orderId: string;
}

export class FinishOrder {
    async execute({ orderId }: FinishOrderRequest) {
        const order = await prisma.order.update({
            where: {
                id:  orderId
            },
            data: {
                isClosed: true,
            },
        })

        return order
    }

}
