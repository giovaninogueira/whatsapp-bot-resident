import express from "express";
import { routerResident } from "./residents/residentes.routes";
import { routerWpp } from "./wpp/wpp.routes";

const router = express.Router();

router.use("/", routerResident, routerWpp);

export default router
