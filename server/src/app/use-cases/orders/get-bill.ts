import { prisma } from "../../../infra/database/prisma/prisma-client";

interface GetBillRequest {
    orderId: string;
}

export class GetBill {
    async execute({
        orderId
    }: GetBillRequest) {
        try {
            const bill = await prisma.order.findUniqueOrThrow({
                where: {
                    id: orderId, 
                },
                include: {
                    OrderPlate: {
                        select: {
                            amount: true,
                            plate: true,
                        }
                    }
                }
            })
            return bill;
        } catch {
            throw new Error('Order not founded')
        }

    }
}
