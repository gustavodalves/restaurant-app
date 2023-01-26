import { Request, Response } from 'express';
import { CreatePlate, CreatePlateRequest } from '../../../app/use-cases/plates/create-plate';
import { UpdatePlate, UpdatePlateRequest } from '../../../app/use-cases/plates/edit-plate';

export class PlatesController {
    async create(request: Request, response: Response) {
        const {
            categoryId,
            name,
            price,
            description,
        } = request.body as CreatePlateRequest;

        const createPlate = new CreatePlate();
        const plate = await createPlate.execute({
            categoryId,
            name,
            price,
            description,
        });

        return response
            .status(201)
            .json(plate);
    }

    async update(request: Request, response: Response) {
        const {
            categoryId,
            name,
            price,
            description,
        } = request.body as UpdatePlateRequest;

        const { id: plateId } = request.params;

        const updatePlate = new UpdatePlate();
        const plate = updatePlate.execute(plateId, {
            categoryId,
            name,
            price,
            description,
        });

        return response
            .status(201)
            .json(plate);
    }
}
