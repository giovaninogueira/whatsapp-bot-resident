import express from "express";
import { routerDelivery } from "./delivery/delivery.router";
import { routerHouse } from "./house/house.router";
import { routerResident } from "./residents/residentes.routes";
import { routerWpp } from "./wpp/wpp.routes";

const router = express.Router();

router.use("/", routerResident, routerWpp, routerHouse, routerDelivery);

export default router
