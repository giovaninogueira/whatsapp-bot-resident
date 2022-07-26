import { Request, Response } from "express";
import { HouseModel } from "../model/house.model";
import { ResidentModel } from "../model/resident.model";

class CreateResidentUseCase {
  /**
   * Execute
   * @param req 
   * @param resp 
   * @returns 
   */
  async execute(req: Request, resp: Response) {
    const { name, cellphone, houseId } = req.body;
    const existPhone = await ResidentModel.findOneBy({ cellphone });
    const house = await HouseModel.findOneBy({ id: houseId })

    if (!house) {
      return resp.status(400).send({
        message: "house not exist",
      });
    }

    if (existPhone) {
      return resp.status(400).send({
        message: "phone exist",
      });
    }

    const residentModel = new ResidentModel();
    residentModel.name = name;
    residentModel.house = house
    residentModel.cellphone = cellphone;
    await residentModel.save();

    return resp.status(201).send({
      data: 'residentModel',
    });
  }
}

export { CreateResidentUseCase };
