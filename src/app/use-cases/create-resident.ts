import { Request, Response } from "express";
import { ResidentModel } from "../model/resident.model";

class CreateResidentUseCase {
  async execute(req: Request, resp: Response) {
    const { name, apartment, phone } = req.body;
    const existPhone = await ResidentModel.findOneBy({
      phone,
    });

    if (existPhone) {
      return resp.status(400).send({
        message: "phone exist",
      });
    }

    const residentModel = new ResidentModel();
    residentModel.name = name;
    residentModel.apartment = apartment;
    residentModel.phone = phone;
    await residentModel.save();

    return resp.status(201).send({
      data: residentModel,
    });
  }
}

export { CreateResidentUseCase };
