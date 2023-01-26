import { prisma } from '../../../infra/database/prisma/prisma-client';

export interface CreatePlateRequest {
    name: string;
    price: number;
    categoryId: string;
    description?: string;
}

export class CreatePlate {
    async execute({
        name,
        price,
        categoryId,
        description
    }: CreatePlateRequest) {
        const plate = await prisma.plate.create({
            data: {
                name,
                price,
                categoryId,
                description,
            },
            include: {
                category: true,
            },
        });

        return {
            ...plate,
            categoryId: undefined
        };
    }
}
