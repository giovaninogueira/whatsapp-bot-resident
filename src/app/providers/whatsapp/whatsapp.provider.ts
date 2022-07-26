import { create, Whatsapp } from "venom-bot";

class WhatsAppProvider {
  static base64: string;
  static client: Whatsapp;

  static async connect(session: string) {
    create({ session, multidevice: true, headless: true })
      .then((client) => {
        WhatsAppProvider.client = client;
        // client.sendText('5517996526315@c.us', '👋 Hello from venom!').then((data) => console.log(data))
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  static async isActive() {
    if (WhatsAppProvider.client) {
      return await WhatsAppProvider.client.isConnected();
    }
    return false;
  }

  static async close() {
    if (WhatsAppProvider.client) {
      await WhatsAppProvider.client.close();
    }
  }
}

export { WhatsAppProvider };
