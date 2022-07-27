import { Request, Response } from "express";
import App from "../app";
import { ChatModel } from "../model/chat.model";
import { DeliveryModel } from "../model/delivery.model";
import { HouseModel } from "../model/house.model";
import { ResidentModel } from "../model/resident.model";

class CreateDeliveryUseCase {
  /**
   * Execute
   * @param req 
   * @param resp 
   * @returns 
   */
  async execute(req: Request, resp: Response) {
    const { codePackage, length, houseId } = req.body;

    const [house] = await HouseModel.find({
      relations: ['residents'],
      where: { id: houseId }
    })

    if (!house) {
      return resp.status(400).send({
        message: "house not exist",
      });
    }

    const deliveryModel = new DeliveryModel();
    deliveryModel.codePackage = codePackage;
    deliveryModel.house = house
    deliveryModel.length = length

    const deliveryData = await deliveryModel.save();

    await this.sendNotify(house.residents, deliveryModel)

    return resp.status(201).send({
      data: deliveryData
    });
  }

  /**
   * Send notify
   * @param residents 
   * @param delivery 
   */
  private async sendNotify(residents: ResidentModel[], delivery: DeliveryModel) {
    const messagesForSend = [];
    const saves = [];

    for (const resident of residents) {
      if (resident.notify) {
        const promiseSendText = App.whatsAppProvider.sendText(
          resident.cellphone,
          `Olá, ${resident.name}! Sua encomenda acabou de chegar! 🚀\nQuantidade: ${delivery.length}\nCódigo do pedido: ${delivery.codePackage}\nDigite "entregas" para ver o status das entregas. 📦`
        );
        messagesForSend.push(promiseSendText)
      }
    }

    const responses = await Promise.all(messagesForSend) as Array<any>;

    for (const response of responses) {
      const chatModel = new ChatModel()
      chatModel.delivery = delivery
      chatModel.message = response.text;
      saves.push(chatModel.save())
    }

    await Promise.all(saves)
  }
}

export { CreateDeliveryUseCase };
