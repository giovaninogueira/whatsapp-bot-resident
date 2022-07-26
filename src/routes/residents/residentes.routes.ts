import express from "express";
import { CreateResidentUseCase } from "../../app/use-cases/create-resident";

const routerResident = express.Router();
const createResidentUseCase = new CreateResidentUseCase();

routerResident.post(
  "/resident",
  createResidentUseCase.execute.bind(createResidentUseCase)
);

export { routerResident };
