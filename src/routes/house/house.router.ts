import express from "express";
import { CreateHouseUseCase } from "../../app/use-cases/create-house";
import { GetHousesUseCases } from "../../app/use-cases/get-houses";

const routerHouse = express.Router();
const getHousesUseCase = new GetHousesUseCases();
const createHouseUseCase = new CreateHouseUseCase();

routerHouse.get("/houses", getHousesUseCase.execute.bind(getHousesUseCase));
routerHouse.post("/house", createHouseUseCase.execute.bind(createHouseUseCase));

export { routerHouse };
