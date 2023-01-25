import { Router } from "express";
import { PlatesController } from "../../../controllers/plates.controller";

export class PlatesRouter {
    private controller = new PlatesController();
    constructor(
        private router: Router
    ) {}

    init() {
        this.router.post('/', this.controller.create)
        this.router.put('/:id', this.controller.update)
    }
}
