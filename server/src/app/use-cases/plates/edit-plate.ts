import { prisma } from '../../../infra/database/prisma/prisma-client';

export interface UpdatePlateRequest {
    name?: string;
    price?: number;
    categoryId?: string;
    description?: string;
}

export class UpdatePlate {
    async execute(
        plateId: string,
        request: UpdatePlateRequest
    ) {
        const plate = await prisma.plate.update({
            where: {
                id: plateId,
            },
            data: request,
        });

        return plate;
    }
}
