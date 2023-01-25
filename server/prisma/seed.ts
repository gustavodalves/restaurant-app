import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CategorySeed {
    static async run() {
        await prisma.$transaction([
            prisma.orderStatus.deleteMany(),

            prisma.orderStatus.create({
                data: {
                    title: 'Pending'
                }
            }),
            prisma.orderStatus.create({
                data: {
                    title: 'Ready'
                }
            }),
            prisma.orderStatus.create({
                data: {
                    title: 'Waiting'
                }
            }),
            prisma.category.create({
                data: {
                    title: 'Drinks',
                    Plate: {
                        create: [
                            {
                                name: 'Coke',
                                price: 7.00,
                            },
                            {
                                name: 'Water',
                                price: 4.00,
                            },
                        ]
                    }
                },
            }),

            prisma.category.create({
                data: {
                    title: 'Diserves',
                    Plate: {
                        create: [
                            {
                                name: 'Petit Gateut',
                                price: 30.23,
                            },
                            {
                                name: 'Apple Pie',
                                price: 5,
                            },
                        ]
                    }
                },
            }),


            prisma.category.create({
                data: {
                    title: 'Steaks',
                    Plate: {
                        create: [
                            {
                                name: 'Barbecue Ribs',
                                price: 210.00,
                            },
                        ]
                    }
                }
            }),
        ])
    }
}

CategorySeed.run();
prisma.$disconnect();
