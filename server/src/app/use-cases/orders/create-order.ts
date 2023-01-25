import { prisma } from "../../../infra/database/prisma/prisma-client";

export interface CreateOrderRequest {
    platesIds: string[]
}

export class CreateOrder {
    async execute({platesIds}: CreateOrderRequest) {
        const plates = platesIds.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});

        const platesCreated = Object.entries(plates).map(([key, value]) => (
            {
                plateId: key,
                amount: +value!
            }
        ))

        const order = await prisma.order.create({
            data: {
                ordersStatus: {
                    connect: {
                        title: 'Pending'
                    }
                },
                OrderPlate: {
                    create: platesCreated
                }
            },
            include: {
                OrderPlate: {
                    select: {
                        plate: {
                            select: {
                                name: true,
                                price: true,
                            }
                        },
                        amount: true,
                    }
                },
                ordersStatus: true,
            },
        })

        return order;
    }
}
