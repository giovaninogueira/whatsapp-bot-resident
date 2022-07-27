import { Request, Response } from "express";
import { HouseModel } from "../model/house.model";

class CreateHouseUseCase {
  /**
   * Execute
   * @param req 
   * @param resp 
   * @returns 
   */
  async execute(req: Request, resp: Response) {
    const { street, number, complement, zipCode } = req.body;

    const houseModel = new HouseModel();
    houseModel.street = street;
    houseModel.number = number;
    houseModel.zipCode = zipCode;
    houseModel.complement = complement;

    const houseData = await houseModel.save();

    return resp.status(201).send({ 
      data: houseData 
    });
  }
}

export { CreateHouseUseCase };
