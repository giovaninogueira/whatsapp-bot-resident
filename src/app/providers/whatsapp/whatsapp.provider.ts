import { create, Whatsapp } from "venom-bot";
import { ResidentModel } from "../../model/resident.model";

class WhatsAppProvider {
  public base64: string;
  public client: Whatsapp;
  public statusSession: string

  /**
   * Connect with whatsapp
   * @param session 
   */
  async connect(session: string) {
    /**
     * Get base64
     * @param base64Qrimg 
     */
    const base64 = (base64Qrimg: string) => {
      this.base64 = base64Qrimg
    }

    const option = {
      multidevice: true,
      headless: true
    }
    // connect whatsapp
    create(session, base64, undefined, option).then((client) => {
      this.client = client;

      client.onMessage(async (message) => {
        const [from] = message.from.split('@c.us')

        if (message.body.indexOf('entregas') !== -1) {
          const [resident] = await ResidentModel.find({
            relations: ['house.deliveries', 'house.deliveries.resident'],
            where: {
              cellphone: from
            }
          })

          if (!resident.house.deliveries.length) {
            await this.sendText(from, 'Você não possui nenhuma entrega...')
          }

          let text = '';
          for (const delivery of resident.house.deliveries) {
            text += `Código do pacote: ${delivery.codePackage}\n`
            text += `Quantidade de pacotes: ${delivery.length}\n`
            
            if (!delivery.delivered) {
              text += `Entrega pendente 🕗\n`
            } else {
              text += `Entrega efetuada com sucesso ✅\n`
              text += `Foi entregue para: ${delivery.resident.name}\n`
            }

            text += '\n';
          }
          
          await this.sendText(from, text)
          return
        }

        await this.sendText(from, 'Não entendi...Escreva "entregas" para visualizar os status das entregas')
      });

    }).catch((erro) => {
      console.error(erro);
    });
  }

  /**
   * Send Text
   * @param phone
   * @param text 
   * @returns 
   */
  async sendText(phone: string, text: string) {
    return this.client.sendText(`${phone}@c.us`, text)
  }

  /**
   * Verify if is active
   * @returns 
   */
  async isActive() {
    if (this.client) {
      return this.client.isConnected();
    }
    return false;
  }

  /**
   * Close connection
   */
  async close() {
    if (this.client) {
      await this.client.close();
    }
  }
}

export { WhatsAppProvider };
