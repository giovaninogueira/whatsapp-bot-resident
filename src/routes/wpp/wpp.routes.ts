import express from "express";
import GetBase64UseCase from "../../app/use-cases/get-base64-wpp";

const routerWpp = express.Router();
const getBase64UseCase = new GetBase64UseCase();

routerWpp.get("/wpp/base64", getBase64UseCase.execute.bind(getBase64UseCase));

export { routerWpp };
