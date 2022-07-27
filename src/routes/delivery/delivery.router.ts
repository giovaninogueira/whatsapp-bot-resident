import express from "express";
import { CreateDeliveryUseCase } from "../../app/use-cases/create-delivery";

const routerDelivery = express.Router();
const createDeliveryUseCase = new CreateDeliveryUseCase();

routerDelivery.post("/delivery", createDeliveryUseCase.execute.bind(createDeliveryUseCase));

export { routerDelivery };
