import express from "express";
import { routerHouse } from "./house/house.router";
import { routerResident } from "./residents/residentes.routes";
import { routerWpp } from "./wpp/wpp.routes";

const router = express.Router();

router.use("/", routerResident, routerWpp, routerHouse);

export default router
