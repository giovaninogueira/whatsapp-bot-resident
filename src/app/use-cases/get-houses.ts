import { Request, Response } from "express";
import { HouseModel } from "../model/house.model";

class GetHousesUseCases {
  /**
   * Execute
   * @param req 
   * @param resp 
   * @returns 
   */
  async execute(req: Request, resp: Response) {
    const houses = await HouseModel.find();
    return resp.status(201).send(houses);
  }
}

export { GetHousesUseCases };
